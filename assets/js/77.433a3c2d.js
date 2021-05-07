(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{461:function(e,t,a){"use strict";a.r(t);var s=a(8),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"cluster-maintenance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cluster-maintenance"}},[e._v("#")]),e._v(" Cluster Maintenance")]),e._v(" "),a("p",[e._v("This includes how to use and maintain a Cadence cluster for both clients and server clusters.")]),e._v(" "),a("h2",{attrs:{id:"scale-up-down-cluster"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scale-up-down-cluster"}},[e._v("#")]),e._v(" Scale up & down Cluster")]),e._v(" "),a("ul",[a("li",[e._v("When CPU/Memory is getting bottleneck on Cadence instances, you may scale up or add more instances.")]),e._v(" "),a("li",[e._v("Watch "),a("RouterLink",{attrs:{to:"/docs/operation-guide/monitor/"}},[e._v("Cadence metrics")]),e._v(" "),a("ul",[a("li",[e._v("See if the external traffic to frontend is normal")]),e._v(" "),a("li",[e._v("If the slowness is due to too many tasks on a tasklist, you may need to "),a("RouterLink",{attrs:{to:"/docs/operation-guide/maintain/#scale-up-a-tasklist-using-scalable-tasklist-feature"}},[e._v("scale up the tasklist")])],1),e._v(" "),a("li",[e._v("If persistence latency is getting too high, try scale up your DB instance")])])],1),e._v(" "),a("li",[e._v("Never change the "),a("RouterLink",{attrs:{to:"/docs/operation-guide/setup/#static-configuration"}},[a("code",[e._v("numOfShards")]),e._v(" of a cluster")]),e._v(". If you need that because the current one is too small, follow the instructions to "),a("RouterLink",{attrs:{to:"/docs/operation-guide/maintain/#migrate-cadence-cluster"}},[e._v("migrate your cluster to a new one")]),e._v(".")],1)]),e._v(" "),a("h2",{attrs:{id:"scale-up-a-tasklist-using-scalable-tasklist-feature"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scale-up-a-tasklist-using-scalable-tasklist-feature"}},[e._v("#")]),e._v(" Scale up a tasklist using "),a("code",[e._v("Scalable tasklist")]),e._v(" feature")]),e._v(" "),a("p",[e._v("By default a tasklist is not scalable enough to support hundreds of tasks per second. That’s mainly because each tasklist is assigned to a Matching service node, and dispatching tasks in a tasklist is in sequence.")]),e._v(" "),a("p",[e._v("In the past, Cadence recommended using multiple tasklists to start workflow/activity. You need to make a list of tasklists and randomly pick one when starting workflows. And then when starting workers, let them listen to all the tasklists.")]),e._v(" "),a("p",[e._v("Nowadays, Cadence has a feature called “Scalable tasklist”. It will divide a tasklist into multiple logical partitions, which can distribute tasks to multiple Matching service nodes. By default this feature is not enabled because there is some performance penalty on the server side, plus it’s not common that a tasklist needs to support more than hundreds tasks per second.")]),e._v(" "),a("p",[e._v("You must make a dynamic configuration change in Cadence server to use this feature:")]),e._v(" "),a("p",[a("strong",[e._v("matching.numTasklistWritePartitions")])]),e._v(" "),a("p",[e._v("and")]),e._v(" "),a("p",[a("strong",[e._v("matching.numTasklistReadPartitions")])]),e._v(" "),a("p",[e._v("matching.numTasklistWritePartitions is the number of partitions when a Cadence server sends a task to the tasklist.\nmatching.numTasklistReadPartitions is the number of partitions when your worker accepts a task from the tasklist.")]),e._v(" "),a("p",[e._v("There are a few things to know when using this feature:")]),e._v(" "),a("ul",[a("li",[e._v("Always make sure "),a("code",[e._v("matching.numTasklistWritePartitions <= matching.numTasklistReadPartitions")]),e._v(" . Otherwise there may be some tasks that are sent to a tasklist partition but no poller(worker) will be able to pick up.")]),e._v(" "),a("li",[e._v("Because of above, when scaling down the number of partitions, you must decrease the WritePartitions first, to wait for a certain time to ensure that tasks are drained, and then decrease ReadPartitions.")]),e._v(" "),a("li",[e._v("Both domain names and taskListName should be specified in the dynamic config. An example of using this feature. See more details about dynamic config format using file based "),a("RouterLink",{attrs:{to:"/docs/operation-guide/setup/#static-configs"}},[e._v("dynamic config")]),e._v(".")],1)]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('matching.numTasklistWritePartitions:\n  - value: 10\n    constraints:\n      domainName: "samples-domain"\n      taskListName: "aScalableTasklistName"\nmatching.numTasklistReadPartitions:\n  - value: 10\n    constraints:\n      domainName: "samples-domain"\n      taskListName: "aScalableTasklistName"\n')])])]),a("p",[e._v("NOTE: the value must be integer without double quotes.")]),e._v(" "),a("h2",{attrs:{id:"restarting-cluster"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#restarting-cluster"}},[e._v("#")]),e._v(" Restarting Cluster")]),e._v(" "),a("p",[e._v("Make sure rolling restart to keep high availability.")]),e._v(" "),a("h2",{attrs:{id:"sql-database-connection-best-practice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql-database-connection-best-practice"}},[e._v("#")]),e._v(" SQL Database Connection Best Practice")]),e._v(" "),a("ul",[a("li",[e._v("Connection is shared within a Cadence server host")]),e._v(" "),a("li",[e._v("For each host, The max number of connections it will consume is maxConn of defaultStore + maxConn of visibilityStore.")]),e._v(" "),a("li",[e._v("The total max number of connections your Cadence cluster will consume is the summary from all hosts(from Frontend/Matching/History/SysWorker services)")]),e._v(" "),a("li",[e._v("Frontend and history nodes need both default and visibility Stores, but matching and sys workers only need default Stores, they don't need to talk to visibility DBs.")]),e._v(" "),a("li",[e._v("For default Stores, history service will take the most connection, then Frontend/Matching. SysWorker will use much less than others")]),e._v(" "),a("li",[e._v("Default Stores is for Cadence’ core data model, which requires strong consistency. So it cannot use replicas.  VisibilityStore is not for core data models. It’s recommended to use a separate DB for visibility store if using DB based visibility.")]),e._v(" "),a("li",[e._v("Visibility Stores usually take much less connection as the workload is much lightweight(less QPS and no explicit transactions).")]),e._v(" "),a("li",[e._v("Visibility Stores require eventual consistency for read. So it can use replicas.")]),e._v(" "),a("li",[e._v("MaxIdelConns should be less than MaxConns, so that the connections can be distributed better across hosts.")])]),e._v(" "),a("h2",{attrs:{id:"upgrading-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrading-server"}},[e._v("#")]),e._v(" Upgrading Server")]),e._v(" "),a("p",[e._v("Things need to keep in mind before upgrading a cluster:")]),e._v(" "),a("ul",[a("li",[e._v("Database schema changes need to apply first.")]),e._v(" "),a("li",[e._v("Usually schema change is backward compatible. So rolling back usually is not a problem. It also means that Cadence allows running a mixed version of schema, as long as they are all greater than or equal to the required version of the server.\nOther requirements for upgrading should be found in the release notes. It may contain information about config changes, or special rollback instructions if normal rollback may cause problems.")]),e._v(" "),a("li",[e._v("It's recommended to upgrade one minor version at a time. E.g, if you are at 0.10, you should upgrade to 0.11, stabilize it with running some normal workload to make sure that the upgraded server is happy with the schema changes. After ~1 hour, then upgrade to 0.12. then 0.13. etc.")]),e._v(" "),a("li",[e._v("The reason above is that for each minor upgrade, you should be able to follow the release notes about what you should do for upgrading. The release notes may require you to run some commands. This will also help to narrow down the cause when something goes wrong.")]),e._v(" "),a("li",[e._v("Do not use “auto-setup” images to upgrade your schema. It's mainly for development. At most for initial setup only.")])]),e._v(" "),a("p",[e._v("For how to upgrade database schema, refer to this doc: "),a("a",{attrs:{href:"https://github.com/uber/cadence/tree/master/tools/sql",target:"_blank",rel:"noopener noreferrer"}},[e._v("SQL tool README"),a("OutboundLink")],1),e._v(" "),a("a",{attrs:{href:"https://github.com/uber/cadence/tree/master/tools/cassandra",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cassandra tool README"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("The tool makes use of a table called “schema_versions” to keep track of upgrading History. But there is no transaction guarantee for cross table operations. So in case of some error, you may need to fix or apply schema change manually.\nAlso, the schema tool by default will upgrade schema to the latest, so no manual is required. ( you can also specify to let it upgrade to any place, like 0.14).")]),e._v(" "),a("p",[e._v("Database schema changes are versioned in the folders: "),a("a",{attrs:{href:"https://github.com/uber/cadence/tree/master/schema/mysql/v57/cadence/versioned",target:"_blank",rel:"noopener noreferrer"}},[e._v("Versioned Schema Changes"),a("OutboundLink")],1),e._v(" for Default Store\nand "),a("a",{attrs:{href:"https://github.com/uber/cadence/tree/master/schema/mysql/v57/visibility/versioned",target:"_blank",rel:"noopener noreferrer"}},[e._v("Versioned Schema Changes"),a("OutboundLink")],1),e._v(" for Visibility Store if you use database for basic visibility instead of ElasticSearch.")]),e._v(" "),a("h2",{attrs:{id:"migrate-cadence-cluster"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migrate-cadence-cluster"}},[e._v("#")]),e._v(" Migrate Cadence cluster")]),e._v(" "),a("p",[e._v("Migrating a Cadence cluster is rare, but could happen.\nThere could be some reasons like:")]),e._v(" "),a("ul",[a("li",[e._v("Migrate to different storage, for example from Postgres/MySQL to Cassandra")]),e._v(" "),a("li",[e._v("Split traffic")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/uber/cadence/issues/4179",target:"_blank",rel:"noopener noreferrer"}},[e._v("TODO"),a("OutboundLink")],1),e._v(": Scale up -- move to a bigger cluster, with larger number of shards.")])]),e._v(" "),a("p",[e._v("The below steps require to enable the "),a("RouterLink",{attrs:{to:"/docs/concepts/cross-dc-replication/#running-in-production"}},[e._v("cross dc replication feature")]),e._v(":")],1),e._v(" "),a("ol",{attrs:{start:"0"}},[a("li",[a("p",[e._v("Assuming at the beginning, you have only one cluster.")])]),e._v(" "),a("li",[a("p",[e._v("Create your domain with the global domain feature(XDC). Since you only have one cluster, there is no replication happening. But you still need to tell the replication topology when creating your domain.")])])]),e._v(" "),a("p",[a("code",[e._v("cadence --do <domain_name> domain register --global_domain true --clusters <initialClustersName> --active_cluster <initialClusterName>")])]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Later on, after you setting up a new cluster, you can add the cluster to domain replication config")])]),e._v(" "),a("p",[a("code",[e._v("cadence --do <domain_name> domain update --clusters <initialClusterName> <newClusterName>")])]),e._v(" "),a("p",[e._v("It will start replication right after for all the active workflows.")]),e._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[e._v("After you are sure the new cluster is healthy, you then switch the active cluster to the new cluster.")])]),e._v(" "),a("p",[a("code",[e._v("cadence --do <domain_name> domain update --active_cluster <newClusterName>")])]),e._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[e._v("After some time, you make sure the new cluster is running fine, then remove the old cluster from replication:")])]),e._v(" "),a("p",[a("code",[e._v("cadence --do <domain_name> domain update --clusters <newClusterName>")])]),e._v(" "),a("p",[e._v("NOTE 1: It’s better to enable the XDC feature from the beginning for all domains. Because a local domain cannot be converted to a global one.")]),e._v(" "),a("p",[e._v("If your current domain is NOT a global domain, you cannot use the XDC feature to migrate. The only way is to create a new global domain, and start to use the new domains for new workflows, and drain the old workflows to finish. After all old workflows are finish, you then use the above instruction to migrate.")]),e._v(" "),a("h2",{attrs:{id:"stress-bench-test-a-cluster"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stress-bench-test-a-cluster"}},[e._v("#")]),e._v(" Stress/Bench Test a cluster")]),e._v(" "),a("p",[e._v("It's recommended to run bench test on your cluster following this "),a("a",{attrs:{href:"https://github.com/uber/cadence/tree/master/bench",target:"_blank",rel:"noopener noreferrer"}},[e._v("package"),a("OutboundLink")],1),e._v(" to see the maximum throughput that it can take, whenever you change some setup.")])])}),[],!1,null,null,null);t.default=o.exports}}]);