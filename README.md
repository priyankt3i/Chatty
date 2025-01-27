# AI Chat App :robot:

A cross-platform chat application built with React Native & Expo, integrated with OpenAI's GPT-4 for intelligent conversations. Supports iOS, Android, and Web.

[![Expo](https://img.shields.io/badge/Expo-000000?style=flat&logo=expo&logoColor=white)](https://expo.dev)
[![React Native](https://img.shields.io/badge/React_Native-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactnative.dev)

![Chat App Demo](screenshots/demo.gif)

## Features ✨
- **Cross-Platform**: Works on iOS, Android, and Web
- **AI Integration**: GPT-4 powered conversations
- **Secure Auth**: Email & Social logins (Google/Apple/Facebook)
- **Smart Chat**: Message history, typing indicators, multimedia support
- **Customization**: Light/dark themes, bot persona configuration
- **Real-Time**: Push notifications & chat synchronization

## Prerequisites 📋
- Node.js v16+
- Expo CLI (`npm install -g expo-cli`)
- Firebase project (for authentication)
- OpenAI API key
- Xcode (iOS development)
- Android Studio (Android development)

## Setup & Installation ⚙️

### 1. Clone Repository
```bash
git clone https://github.com/yourusername/chat-app.git
cd chat-app
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment
Create `.env` file in root directory:
```env
FIREBASE_API_KEY=your_firebase_key
FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
OPENAI_API_KEY=your_openai_key
```

### 4. Firebase Setup
1. Create Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication providers (Email/Google/Apple)
3. Update Firebase config in `src/config/firebase.js`

## Running Locally 🚀

### Web Development
```bash
expo start --web
```

### iOS Simulator
```bash
expo run:ios
```

### Android Emulator
```bash
expo run:android
```

## Deployment 🌍

### 1. Expo Publishing
```bash
expo publish
```

### 2. App Store Deployment
1. Install EAS CLI:
   ```bash
   npm install -g eas-cli
   ```
2. Build iOS app:
   ```bash
   eas build --platform ios
   ```
3. Follow [Expo App Store Guide](https://docs.expo.dev/submit/ios/)

### 3. Play Store Deployment
1. Build Android app:
   ```bash
   eas build --platform android
   ```
2. Follow [Expo Play Store Guide](https://docs.expo.dev/submit/android/)

### 4. Web Deployment (PWA)
1. Build web version:
   ```bash
   expo build:web
   ```
2. Deploy `web-build` folder to hosting service:
   ```bash
   npm install -g vercel
   vercel deploy --prod
   ```

## Environment Variables 🔑
| Variable | Description |
|----------|-------------|
| `FIREBASE_API_KEY` | Firebase project API key |
| `FIREBASE_AUTH_DOMAIN` | Firebase authentication domain |
| `OPENAI_API_KEY` | OpenAI API secret key |
| `EXPO_PUBLIC_API_URL` | Backend API base URL |

## Contributing 🤝
1. Fork the repository
2. Create feature branch:
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. Commit changes
4. Push to branch
5. Open Pull Request

## License 📄
This project is licensed under the MIT License - see [LICENSE](LICENSE) file for details.

## Acknowledgments 🙏
- OpenAI for GPT-4 integration
- Expo for cross-platform framework
- Firebase for authentication services

---

**Need Help?**  
Open an issue or contact maintainers at support@chatapp.com

## Project Structure 📂

```
chat-app/
├── assets/            # Media files
├── components/        # Reusable components
├── config/            # Configuration files
├── contexts/          # React contexts
├── hooks/             # Custom hooks
├── navigation/        # App navigation
├── screens/           # Application screens
├── services/          # API services
├── store/             # Redux store
├── tests/             # Test files
├── .env               # Environment variables
├── app.json           # Expo config
├── babel.config.js    # Babel config
└── package.json       # Dependencies
```

## Troubleshooting 🔧
**Common Issues:**
1. **Authentication Errors**
   - Verify Firebase configuration
   - Ensure auth providers are enabled

2. **API Connection Failures**
   - Check OpenAI API key
   - Verify network connectivity

3. **Build Failures**
   - Clean build artifacts:
     ```bash
     expo prebuild --clean
     ```
   - Update Expo SDK:
     ```bash
     expo upgrade
     ```

**Mobile Testing Tips:**
1. Install Expo Go app on physical devices
2. Scan QR code from `expo start` output
3. Enable USB debugging for Android devices

---

This README provides comprehensive documentation for developers to set up, run, and deploy the chat application. Adjust the content based on your specific implementation details and project requirements.
