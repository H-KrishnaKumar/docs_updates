# Send ForePaaS alerts to Slack

Are you or your teammates already using [Slack](https://slack.com/) for internal communication? If you want to receive ForePaaS alerts directly on it, this guide is for you.

![slack](picts/slack-example.png)

The configuration is done in two parts. First you need to [allow the integration from your Slack environment](/en/product/cc/alerting/consumers/slack?id=configuration-on-slack), and then [configure the external consumer on ForePaaS](/en/product/cc/alerting/consumers/slack?id=configuration-on-forepaas).

---
## Configuration on Slack

The first step is to create an Incoming Webhook on your Slack, which you will use as the external consumer of ForePaaS alerts. To learn how to do this, please follow [this guide written by Slack](https://api.slack.com/messaging/webhooks).

> Note that you will need sufficient permission to create a webhook on your Slack environment. If you struggle to create the webhook, please check with your administrator that you have sufficient access.

At the end of the process, you should have a webhook URL with the following format: *https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX* 

---
## Configuration on ForePaaS

If you haven't done so already, start adding a new external consumer by clicking on **Add external consumer** from an alert's preferences page or directly from the Control Center's Settings page.

![alerts](picts/cc-subscribers-new-consumer.png)

Select *Slack* and press **Confirm**

![slack](picts/cc-slack-store.png)

You will need to enter the following information:
- **Incoming Webhook URL**: enter the URL that was obtained at the end of [the first configuration step on Slack](/en/product/cc/alerting/consumers/slack?id=configuration-on-slack).

![slack](picts/cc-slack-configuration.png)

To save time, it is possible to configure this consumer to be automatically linked by default to all the alerts that will be created in the future. This will not affect alerts that were created before the consumer (you will have to manually add the new consumer to them).

![slack](picts/cc-slack-config-default.png)

After confirming the creation of the new consumer, you can find and manage it in the **Settings** of the Control Center.

![slack](picts/settings-consumers.png)

---
## Struggling to set it up by yourself❓

That's fine, tell us how we can help! Get in touch on our support portal or reach out at support@forepaas.com.