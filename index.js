const express = require('express');
const { ytdl } = require('globalsprak'); 
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/ytb', async (req, res) => {
    const { url, format } = req.query;

    if (!url) {
        return res.status(400).send('You must provide a YouTube URL.');
    }

    try {
        let response = {};
        let media;

        if (format === 'mp3') {
            media = await ytdl(url, { quality: 'highestaudio', format: 'mp3' });
            response = {
                title: media.result.title || "Unknown Title",  
                quality: media.result.quality || "Unknown Quality",
                channel: media.result.channel || "Unknown Channel", 
                description: media.result.desc || "No Description",
                audio: media.result.audio || "No audio URL"       
            };
        } else if (format === 'mp4') {
            media = await ytdl(url, { quality: 'highestvideo', format: 'mp4' });
            response = {
                title: media.result.title || "Unknown Title",  
                quality: media.result.quality || "Unknown Quality", 
                channel: media.result.channel || "Unknown Channel",
                description: media.result.desc || "No Description",
                video: media.result.video || "No video URL"       
            };
        } else {
            return res.status(400).send('Invalid format. Please use "mp3" or "mp4".');
        }

        res.status(200).json(response);
    } catch (error) {
        console.error("Error downloading media:", error);
        res.status(500).send('Error downloading media.');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
