# YouTube Downloader API

This is a simple YouTube downloader API built with Express.js and the `globalsprak` npm package. It allows users to download YouTube videos as either MP3 (audio) or MP4 (video) files by providing the YouTube URL and specifying the desired format.

## Features

- **Download MP3 (audio)** from a YouTube video.
- **Download MP4 (video)** from a YouTube video.
- Provides the video title, channel name, quality, description, and media URL.

## Installation

### Prerequisites

- Node.js (v12 or higher)
- `npm` or `yarn`

### Steps

1. Clone this repository or copy the code to your project:
   ```bash
   git clone https://github.com/your-repo/youtube-downloader-api.git
   cd youtube-downloader-api
   ```

2. Install the required dependencies:
   ```bash
   npm install express globalsprak
   ```

3. Create a `.env` file in the root directory (optional) to set your port, or use the default port `3000`.

## Usage

1. Run the server:
   ```bash
   node index.js
   ```

2. The server will start at `http://localhost:3000`.

3. Send a `GET` request to the `/ytb` endpoint with the following query parameters:
   - `url`: The YouTube video URL.
   - `format`: The format of the media to download (either `mp3` for audio or `mp4` for video).

### Example Requests

- **Download MP3** (audio):
  ```bash
  http://localhost:3000/ytb?url=https://www.youtube.com/watch?v=VIDEO_ID&format=mp3
  ```

- **Download MP4** (video):
  ```bash
  http://localhost:3000/ytb?url=https://www.youtube.com/watch?v=VIDEO_ID&format=mp4
  ```

### Response Structure

If the request is successful, you will receive a JSON response containing the following data:

- **title**: The title of the YouTube video.
- **quality**: The quality of the media.
- **channel**: The name of the YouTube channel.
- **description**: The description of the video.
- **audio** (for MP3 format): The audio URL.
- **video** (for MP4 format): The video URL.

### Example JSON Response

For an MP3 download:

```json
{
  "title": "Sample Video",
  "quality": "High",
  "channel": "Sample Channel",
  "description": "This is a sample description",
  "audio": "https://sample-audio-url.com/audio.mp3"
}
```

For an MP4 download:

```json
{
  "title": "Sample Video",
  "quality": "1080p",
  "channel": "Sample Channel",
  "description": "This is a sample description",
  "video": "https://sample-video-url.com/video.mp4"
}
```

## Error Handling

- If the `url` parameter is missing:
  ```bash
  You must provide a YouTube URL.
  ```

- If the `format` is invalid (not `mp3` or `mp4`):
  ```bash
  Invalid format. Please use "mp3" or "mp4".
  ```

- If there's an error during media downloading:
  ```bash
  Error downloading media.
  ```

## Environment Variables

- `PORT`: You can define the port in your environment using `.env` (defaults to `3000` if not specified).
