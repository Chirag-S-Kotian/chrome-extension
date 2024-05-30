
```markdown
# SAV-URL Chrome Extension

SAV-URL is a powerful Chrome extension built using Polymath AI, Next.js, and Firebase. It allows users to save URLs and manage their bookmarks efficiently with advanced AI features.

## Features

- **Save URLs:** Quickly save URLs from any webpage.
- **Manage Bookmarks:** Organize saved URLs into folders and tags.
- **Search and Filter:** Use AI-powered search to find saved URLs easily.
- **Cross-Device Sync:** Sync bookmarks across multiple devices using Firebase.

## Installation

### Prerequisites

- Google Chrome browser
- Node.js and npm installed
- Firebase account

### Steps

1. **Clone the repository:**
    ```sh
    git clone [https://github.com/yourusername/sav-url-chrome-extension.git](https://github.com/Chirag-S-Kotian/chrome-extension.git)
    cd sav-url-chrome-extension
    ```

2. **Install dependencies:**
    ```sh
    npm install firebase firebaseAdmin
    ```

3. **Set up Firebase:**
    - Go to the [Firebase Console](https://console.firebase.google.com/).
    - Create a new project.
    - Add a new web app to the project.
    - Copy the Firebase configuration details and add them to your project.

4. **Add Firebase configuration:**
    - Create a `.env.local` file in the root of your project and add your Firebase configuration:
      ```env
      NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
      NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
      NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
      NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
      NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
      NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
      ```

5. **Build the extension:**
    ```sh
    npm run build
    ```

6. **Load the extension in Chrome:**
    - Open Chrome and go to `chrome://extensions/`.
    - Enable "Developer mode" at the top right.
    - Click "Load unpacked" and select the `build` folder from your project directory.

## Usage

1. **Save a URL:**
    - Click on the SAV-URL icon in the Chrome toolbar.
    - Click the "Save URL" button to save the current page.

2. **Manage bookmarks:**
    - Open the SAV-URL popup by clicking the extension icon.
    - Use the interface to organize your bookmarks into folders and tags.

3. **Search and filter:**
    - Use the search bar in the extension popup to find bookmarks using AI-powered search.

## Contributing

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/YourFeature`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/YourFeature`
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or feedback, feel free to contact us at [your-email@example.com](mailto:your-email@example.com).

---

Thank you for using SAV-URL!
```
