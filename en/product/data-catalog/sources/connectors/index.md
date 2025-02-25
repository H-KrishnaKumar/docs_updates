# Configure your connector

The platform connectors allow you to import any data type, regardless of its source or format, into your platform, in order to leverage and cross-reference it within analytics applications, APIs, or predictive models. 

Read the following tutorials on featured pre-configured connectors of the Data Catalog to learn how to connect your data in a few clicks. 

- [OVHcloud API](/en/product/data-catalog/sources/connectors/OVHcloud-API/index.md)
- [Apache Kafka](/en/product/data-catalog/sources/connectors/kafka/index.md)
- [Dropbox](/en/product/data-catalog/sources/connectors/dropbox/index.md)
- [Facebook](/en/product/data-catalog/sources/connectors/facebook/index.md)
- [File Upload](/en/product/data-catalog/sources/connectors/upload-files/index.md)
- [Lakehouse Manager Buckets](/en/product/data-catalog/sources/connectors/forepaas-buckets/index)
- [FTP](/en/product/data-catalog/sources/connectors/ftp/index.md)
- [Google Analytics](/en/product/data-catalog/sources/connectors/google_analytics/index.md)
- [HTTP Files](/en/product/data-catalog/sources/connectors/http/index.md)
- [HTTP REST](/en/product/data-catalog/sources/connectors/rest/index.md)
- [Microsoft Azure Blob Storage](/en/product/data-catalog/sources/connectors/blob-storage/index.md)
- [MySQL](/en/product/data-catalog/sources/connectors/mysql/index.md)
- [SFTP](/en/product/data-catalog/sources/connectors/sftp/index.md)
- [SQL Server](/en/product/data-catalog/sources/connectors/sql-server/index.md)
- [Trino](/en/product/data-catalog/sources/connectors/trino/index.md)
- [Twitter](/en/product/data-catalog/sources/connectors/twitter/index.md)

---

## Data Platform IP Whitelisting for External Database Access

To ensure secure access to your external database from our platform, it may be necessary to authorize specific IP addresses. You can whitelist the following IP address in your database configuration to allow seamless and secure communication:

### IP Address to Whitelist:
`51.210.213.114`

### Steps to Whitelist:
1. **Access Database Configuration**:  
   Log in to your database management or security settings where you manage network access.

2. **Locate the IP Whitelisting Section**:  
   Find the section for managing authorized IP addresses, often under "Security" or "Firewall" settings.

3. **Add the IP Address**:  
   Enter `51.210.213.114` into the list of allowed or trusted IP addresses.

4. **Save and Apply Changes**:  
   After adding the IP address, save your changes and apply them to ensure proper access.

By whitelisting this IP, you enable secure communication between the platform and your database while maintaining robust security measures.

---
##  Need help? 🆘

> At any step, you can create a ticket to raise an incident or if you need support at the [OVHcloud Help Centre](https://help.ovhcloud.com/csm/fr-home?id=csm_index). Additionally, you can ask for support by reaching out to us on the Data Platform Channel within the [Discord Server](https://discord.com/channels/850031577277792286/1163465539981672559). There is a step-by-step guide in the [support](/en/support/index.md) section.