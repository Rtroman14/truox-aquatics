// require("dotenv").config();

// const axios = require("axios");

import axios from "axios";

export default async ({ username, channel = "#premier-claim-leads", text }) => {
    const channels = [
        {
            text,
            username,
            icon_emoji: ":warning:",
            unfurl_links: false,
            unfurl_media: false,
            channel: "#premier-claim-leads",
        },
    ];

    const payload = channels.find((el) => el.channel === channel);

    try {
        await axios.post(process.env.SLACK_CHANNELS, payload);
    } catch (error) {
        console.log("slackNotification() --", error);
    }
};
