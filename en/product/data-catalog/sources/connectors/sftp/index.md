# SFTP

The Secure File Transfer Protocol (SFTP) is an alternative to FTP that also allows you to transfer files between a client and server on a computer network, but further adds a layer of security to the process.

The Platform allows you to connect to an SFTP server, select your files on it, and import their data directly into your platform.

![SFTP1](picts/SFTP1.png)

* [Add a SFTP source on the Platform](#add-a-sftp-source-on-the-Platform)
  * [Configuration screen overview](#configuration-screen-overview)
  * [Supported files and sizes](#supported-files-and-sizes)
  * [Configuring your source](#configuring-your-source)

---

## Add a SFTP source on the Platform 

### Configuration screen overview

Once you have found *SFTP* in the **Platform store**, click on *Select* and you will be able to see the configuration screen as shown below -

![SFTP2](picts/SFTP2.png)


### Supported files and sizes

Before you proceed with learning how to configure an SFTP source, it would be interesting to note that - 

* Even though our SFTP connector is able to list every file on your server, keep in mind that meta/data extraction only support the following types: .csv, .xls, .xlsx, .xml, .json, .parquet

* For the Metadata Extraction (see the Analyze part of our Data Catalog guide), the actual limits of size for a file downloaded by our SFTP connector are:
 * Complete Extract: about 900 Mo
 * Sample Extract: about 2.5 Go


### Configuring your source

When creating the source, you will be required to input the following information :


- Host: The URL/IP of the SFTP server you want to connect to (ex: 127.0.0.1)
- Port: The port listened to by your SFTP server
- Username: The login used to authenticate
- Password: The password associated
- Server public key: Your SFTP configuration key
- Path: The path to find specific files on the server (ex: Documents/data/export_2018.csv)


Once you add the above details click on *Connect* and then on the *Create* button on the top right-hand corner.



!> Don't forget to name your source before creating it. The technical name cannot be changed after creating the source and will be used when trying to open the source using the [SDK](/en/technical/sdk/dpe/index).


---
##  Need help? 🆘

> At any step, you can create a ticket to raise an incident or if you need support at the [OVHcloud Help Centre](https://help.ovhcloud.com/csm/fr-home?id=csm_index). Additionally, you can ask for support by reaching out to us on the Data Platform Channel within the [Discord Server](https://discord.com/channels/850031577277792286/1163465539981672559). There is a step-by-step guide in the [support](/en/support/index.md) section.

