---
layout: post
title:  "Quality attributes"
date:   2014-09-17 14:23:54
permalink: guidelines/quality-attributes/
categories: documentation
summary: Our quality attributes are non-functional requirements for transactional services.
tags: 
- quality attributes
---
We know designing and building high quality software is tough. The ability to define and measure the quality of delivered software is a desired, but all too often unmet ambition. In order to fully explain what we mean by quality, we should start at first principles.

#What is architecture?

When we seek to describe a set of components to define a system, we are creating its architecture.

When we refer to the architecture of a system, we are talking about core properties that are realised by its elements, relationships and the principles that underpin its design and evolution. When talking about a system, we are referring to a collection of software and hardware elements that are defined in order to realise requirements.

#Dynamic and runtime structures

Two types of structure make up the elements that comprise a system and its relationships.

The static structures of a system are concerned with the internal design time elements and how they are structured. For example this can be packages or executable code, compiled classes or stored procedures within a database.
The dynamic structures of a system are concerned with the runtime elements and their interactions. For example, this may include messages sent between architecturally significant components, network requests or API calls.
These are both interrelated. In some cases, the static structures will be a predicate to the dynamic structures.


#Quality attributes

The core properties of a system are manifested by two components, its externally visible behaviour and it’s quality attributes. 

The externally visible behaviour of the system concerns itself with the functional elements of the system and how it interacts with its environment. These external behaviours can encompass such elements as the flow of information in and out of the system or how the system reacts to external stimuli.

Quality attributes are non-functional properties and represent the architectural constraints of the system. They allow us to describe the intended behaviours of a system within its execution environment and measure its suitability. Ultimately, the quality attributes of a given system affect the runtime behaviour, user experience and the systems overall design.

We have identified and defined a set of eighteen quality attributes which we feel are congruent to both the principles of good system design and our programme of work. What follows is an introduction to quality attributes and a basic description. We will revisit each in turn in future blog posts to look at them in depth.

#Quality attributes for mygov.scot

For the mygov.scot programme we have identified and defined a set of 18 quality attributes:

- Accessibility
- Availability
- Capacity
- Compatibility
- Efficiency
- Elasticity
- Extensibility
- Localisibility
- Modifiability
- Performance
- Recoverability
- Resilience
- Robustness
- Scalability
- Security
- Serviceability
- Testability
- Usability
These ensure a level of consistency of implementation and reduce complexity when we go to extend a system. The quality attributes we have chosen follow the principles of good system design and help us deliver great products for users.

What follows is an introduction to each quality attributes, with future blog posts diving into more detail in the future.

#Defining quality attributes

1. Accessibility is the degree to which a system is available to as many people as possible. The concept often focuses on people with disabilities or special needs and their right of access. This access is often enabled by the use of assistive technology.

We touched on this in accessibility, the web and you, a blog post from one of our UX Designers.

2. Availability is the amount of time that all components of the system are fully functional for its users. Planned maintenance periods are excluded from availability measures.

3. Capacity is the maximum possible capability of the system in a particular dimension. This would typically include:

- Number of concurrent users
- Number of concurrent requests
- Number of concurrent messages processed
- Total data stored
- Network packet size
- Note that there is a distinction between throughput and capacity. We consider throughput to be the total amount work that can be achieved by a system in a fixed period of time.

4. Compatibility is the ability of a system to be fully functional across a defined range of technologies. We consider typical dimensions of compatibility to include:

- Application Programming Interface (API) compatibility
- Browser compatibility
- Operating System (OS) compatibility
- Virtual Machine (VM) compatibility
- Programming language compatibility
- Hardware / device compatibility
- Character set compatibility
5. Efficiency is the ability of a system to complete its tasks within a limited set of resources. Resource limits would typically include:

- Memory
- Disk space
- CPU usage
- Network bandwidth
- Power consumption
6. Elasticity is the ability of a system to add and remove capacity based on demand.

It should be noted that elasticity could be achieved by both manual and automatic methods.

7. Extensibility is the ability to extend a system, with a minimum amount of effort, without impact to existing system functions. Typically this would allow third parties to contribute new features or capabilities using published APIs, plugins or themes.

8. Localisability is the ability of the system to be configured to support a number of locales.

9. Modifiabiity is the ability of the system to accommodate the addition, change and removal of features, with minimal impact on the rest of the system.

10. Performance is the ability of a system to complete a specific function in a defined amount of time.

Compare this with our previous definition of capacity and our distinction of throughput.

11. Recoverability is the ability to bring the system back to a known working state in a well-defined period of time.

12. Resilience is the ability of the system to tolerate anticipated faults.

13. Robustness is the ability of the system to tolerate unexpected or unplanned external or environmental conditions.

14. Scalability is the relative increase in the capacity of a system as resources are added; while the efficiency and performance of the system remains constant.

15. Security is the ability of the system to preserve the confidentiality, integrity and availability of information under external inputs.

16. Serviceability is the ability of the system to be easily supported, maintained and operated. Service of the system will typically include activities such as:

- Installation
- Upgrading and patching
- Configuration
- Monitoring
- Debugging
17. Testability is the measure of how easy it is to create tests for a system and its associated components, increasing the ability to find and isolate bugs in an effective way.

18. Usability is the ease of use and learnability of the system.

#Still with us?

If you would like to find out more, we recommend reading ISO/IEC/IEEE 42010 Systems & Software Engineering – Architecture Description.
