# Control Center

The Control Center allows Project administrators to get full observability on each service and component in their data Project. They can see across their data pipelines, applications, and deployed instances to **collect metrics, monitor performance, drill-down on logs, set up alerts when issues arise, and ensure scalability** by adding more resources on any service as needed.

![cc](picts/cc-overview.png)


The Control Center can be opened either at the Project's level from the Project home page, or at the organization's level from the header buttons. At the organization's level, all Projects are called (provided the user has [permissions on them](/en/product/organisations/organization-invite-user?id=manage-member-permissions-in-your-organization)) and return their respective metrics.

![cc](picts/ccc-overview-orga.png)


Most metrics can be filtered by timeframe, Project and cloud provider.


![cc](picts/ccc-overview-filters.png)

Check out the following features in the Control Center product documentation.

- [Monitoring](#monitoring)
- [Alerting](#alerting)
- [Jobs Central](#jobs-central)
- [Logs Explorer](#logs-explorer)
- [Scale components in your Project](#scale-components-in-your-Project)


---
## Monitoring
Use laser-sharp monitoring features to get detailed feedback on what is happening in terms of CPU, memory, storage, network usage and more, to anticipate and detect performance issues on deployed production-critical components.

{Discover monitoring panels}(#/en/product/cc/monitoring/index.md)

---
## Alerting
Configure alerts to get notifications on performance problems for specific components, such as jobs failure, health checks or high CPU/memory usage. Fine-tune trigger conditions and get notified to take action as soon as issues arise.

{Learn how to configure alerts}(#/en/product/cc/alerting/index.md)

---
## Jobs Central
Audit and track your job executions, from data processing workloads to AI training tasks, all from a single centralized location.

{Learn how to configure alerts}(#/en/product/cc/job-central.md)

---
## Logs Explorer
Explore and download all your logs for on-the-spot troubleshooting. For each deployed instance in your Project, watch current activity in real-time or drill-down on past logs on the timeframe of your choice.

{Explore logs from the Control Center}(#/en/product/cc/logs/index.md)


---
## Scale components in your Project

the Platform **scales on-demand** and allocates resources dynamically depending on your requirements. Any PoC Project can therefore be operationalized in a couple of clicks. You can then adjust the performance of your application on demand.

The following elements can be scaled from the Control Center:
- [Project APIs](/en/product/api-manager/index) *can be scaled horizontally and vertically*
- [Applications](/en/product/app-manager/index) *can be scaled horizontally and vertically*
- The Application Service component: *an infrastructure service to control APIs and apps, can be scaled vertically*
- [The Query Builder Legacy](/en/product/query-builder/index) *can be scaled vertically*
- [Query engines](/en/product/am/resources) *can be scaled horizontally and vertically*
- [Storage engines](/en/product/project/storage-engine/index) *can be scaled horizontally and vertically*
- [Data Processing Engine jobs](/en/product/dpe/jobs/resources) *can be scaled horizontally and vertically*

Increase the vertical/horizontal resources for the desired component in the [monitoring panel](/en/product/cc/monitoring/index) for its respective component.

{Allocate more resources to a component in the Control Center}(#/en/product/cc/monitoring/index?id=allocate-more-resources-to-a-component-in-the-control-center)


---
###  Need help? 🆘

> At any step, you can create a ticket to raise an incident or if you need support at the [OVHcloud Help Centre](https://help.ovhcloud.com/csm/fr-home?id=csm_index). Additionally, you can ask for support by reaching out to us on the Data Platform Channel within the [Discord Server](https://discord.com/channels/850031577277792286/1163465539981672559). There is a step-by-step guide in the [support](/en/support/index.md) section.