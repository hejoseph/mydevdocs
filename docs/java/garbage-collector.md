---
title: Garbage Collection
sidebar_position: 1
tags:
  - java
  - optimization
  - garbage collection
---

# Garbage Collection (GC) in the JVM – Optimization and Configuration

## Objective

Reduce GC (Garbage Collection) pauses in Java applications by choosing the right garbage collector (G1, ZGC, Shenandoah) and configuring the JVM to balance latency, throughput, and memory usage.

---

## What is Garbage Collection?

The Garbage Collector in the JVM:
- Identifies unused (unreferenced) objects
- Frees up memory they occupy
- Can introduce **pause times** if misconfigured, affecting performance

---

## Why It Matters for Performance

In systems such as:
- Real-time applications (games, finance)
- High-throughput systems (web apps, microservices)
- Low-latency systems (Kafka, databases, event processing)

A poorly configured GC can:
- Trigger long "stop-the-world" pauses
- Cause CPU spikes
- Degrade user experience and system responsiveness

---

## Types of Garbage Collectors

| Collector     | Since   | Advantages                          | Disadvantages               | When to Use                         |
|---------------|---------|-------------------------------------|-----------------------------|-------------------------------------|
| Serial GC     | Java 1.2| Simple                              | Long pauses                 | Small apps, development             |
| Parallel GC   | Java 1.4| High throughput                     | Long pauses                 | Batch jobs, throughput-focused apps |
| G1 GC         | Java 9  | Predictable pauses, balanced        | Not ultra-low latency       | Web servers, general purpose        |
| ZGC           | Java 11+| Ultra-low latency (`<10 ms`)          | Less tuning flexibility     | Low-latency systems (finance, APIs) |
| Shenandoah    | Java 12+| Similar to ZGC, low latency         | Less portable (Red Hat)     | Real-time, low-latency apps         |

---

## How to Choose the Right GC

| Goal                     | Recommended Collector |
|--------------------------|------------------------|
| Balanced performance     | G1 GC                  |
| Ultra-low latency (`<10ms`)| ZGC or Shenandoah      |
| Max throughput (batch)   | Parallel GC            |

---

## JVM Configuration Examples

### G1 GC (Balanced)

```bash
-XX:+UseG1GC
-XX:MaxGCPauseMillis=200
-XX:InitiatingHeapOccupancyPercent=45
-XX:+ParallelRefProcEnabled
-Xms2g -Xmx4g
```

- `MaxGCPauseMillis`: Target max pause duration
- `InitiatingHeapOccupancyPercent`: Threshold to trigger GC

---

### ZGC (Ultra-low latency)

```bash
-XX:+UseZGC
-Xmx4g -Xms4g
```

- Suitable for very low-latency needs
- No tuning required
- Requires Java 11+

---

## Recommended Monitoring Tools

| Tool                  | Purpose                                   |
|-----------------------|-------------------------------------------|
| JVisualVM / JConsole  | View GC events and memory usage live      |
| GC Logs (`-Xlog:gc*`) | Detailed analysis of GC behavior          |
| Java Flight Recorder  | Low-overhead JVM profiling                |
| Prometheus + Grafana  | Real-time JVM metrics visualization       |

---

## Common Mistakes to Avoid

| Mistake                          | Consequence                         |
|----------------------------------|-------------------------------------|
| Ignoring GC logs                 | Cannot analyze or debug GC behavior |
| Using wrong GC for the workload  | Unnecessary long pauses             |
| Incorrect heap sizing            | Too small → frequent GC; too big → longer scans |
| Excessive object allocation      | GC overload (especially young gen)  |
| Using `finalize()`               | Slows down GC, discouraged in modern Java |

---

## Business Use Case Example

### Case: Online PDF Generation System

- Problem: Generates many temporary objects (~100 MB per document)
- Effect: Frequent GC, noticeable user delays
- Solution:
  - Switched to G1 GC
  - Configured `-XX:MaxGCPauseMillis=150`
  - Reused memory buffers to avoid GC pressure
  - Set up Prometheus + Grafana for JVM monitoring

---

## Further Reading

- [JEP 333: ZGC](https://openjdk.org/jeps/333)
- [JEP 318: Epsilon GC (no-op GC for testing)](https://openjdk.org/jeps/318)
- [Oracle JVM GC Tuning Guide](https://docs.oracle.com/javase/8/docs/technotes/guides/vm/gctuning/index.html)

---

## Summary

- GC is critical to Java application performance and reliability
- Choose the collector that matches your latency or throughput needs
- G1 is a solid general-purpose collector
- ZGC and Shenandoah are best for latency-sensitive systems
- Always monitor GC behavior in production and test under load
