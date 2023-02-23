# About

Linux clients (desktop) as provided by common Linux distributions (e.g. Ubuntu or Fedora) are usually installed and administrated by an individual end user. However, companies want to control the client's machines to ensure their basic configuration and security policies are applied. As these policies vary widely from company to company, the integration needs to be tailor-made for each company. 

Nevertheless, in our experience, the basics are often relatively similar and our goal is to unify them with Potos. So to keep this short, the goal of Potos is to provide the framework for tailor-made, enterprise-ready Linux clients to boost productivity for developers, engineers & scientists.

An accurate requirement analysis is the linchpin of a successful Linux client.

### Requirements
The requirements for an enterprise Linux client must be designed and managed in cooperation involving multiple groups of stakeholders:
 * End users
 * Enterprise architects
 * Security
 * Client operations

While end users usually have an "I want it all" attitude, enterprise architects need to ensure that the devices are secure, reliable, etc. and have a more "I prohibit everything" attitude, resulting in (sometimes conflicting) requirements with the need to carefully weigh these requirements against each other. 

#### Root Access
Root access is the most important decision point in regard to security. When granting a user root/sudo permissions, they then have the possibility of changing all security points listed below.

The organisation needs to find the balance between granting enough access for employees to work efficiently and restricting access to only absolutely necessary rights.

Additional considerations when making decision about root access:

* As long as an end user has physical access to the machine and/or to the EFI shell and/or to the grub boot shell, it is not very difficult for them to gain root access.
* When users are allowed to run containers (even as non root with Podman only), they can run anything as root (at least within the container).
* Bulletproof solutions are possible, but quite expensive (i.e. they involve using custom Secure Boot Keys instead of the default Microsoft ones) - both for engineering and maintenance.

In short, an organisation needs to choose the limitations with care. The decision should be run by all teams defined by internal governance, along with understanding end user needs. Once a decision about access/limitations is made, it should be formalized in an administrative agreement to be confirmed by all stakeholders. 


