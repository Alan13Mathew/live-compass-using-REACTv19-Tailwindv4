# React Magnetic Compass

A sleek and accurate magnetic compass built with React, TypeScript, and Tailwind CSS. This compass provides real-time direction tracking using device orientation sensors.

![Compass Screenshot](https://github.com/user-attachments/assets/e8121efb-a989-453a-9de4-6410a99be54f)


[compass](https://github.com/user-attachments/assets/17d34b07-03cc-40b7-9e95-d9ec90da1a53)


## Features

- Real-time magnetic north tracking
- Smooth needle movement
- Precise degree readings
- 16-point cardinal direction system
- Modern, minimalist design
- Responsive layout


## Installation

1. Clone the repository:
```bash
git clone https://github.com/Alan13Mathew/live-compass-using-REACTv19-Tailwindv4.git
```

2. Install dependencies:
```bash
cd react-magnetic-compass
npm install
```

3. Start the development server:
```bash
npm run dev
```

## HTTPS Development Setup

For proper device orientation access, HTTPS is required. Follow these steps:

1. Install vite-plugin-mkcert:
```bash
npm install --save-dev vite-plugin-mkcert
```

2. Update vite.config.ts:
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mkcert from 'vite-plugin-mkcert'

export default defineConfig({
  plugins: [
    react(),
    mkcert()
  ],
  server: {
    https: {},
    host: true,
    port: 5173
  }
})
```

3. Access your development server:
   - Local: `https://localhost:5173`
   - Mobile: `https://your-ip-address:5173`

Note: Accept the self-signed certificate when prompted in your browser.

## Browser Support

### Chrome (Recommended)
- Android: Version 89+
- Desktop: Version 90+
- Enable "Device Sensors" permission

### Firefox
- Android: Version 96+
- Requires about:config sensor permissions

### Safari
- Not recommended due to inconsistent sensor support

## Usage Requirements

- Modern mobile device with magnetometer
- Device orientation sensors enabled
- Supported browsers: Chrome, Firefox
- HTTPS connection (for sensor access)

## Testing on Mobile Devices

1. Connect your mobile device to the same network as your development machine
2. Find your development machine's IP address
3. Access the app via: `https://your-ip-address:5173`
4. Accept SSL certificate warnings in development

## Development Tips

1. Testing Compass Accuracy:
   - Use a real compass for calibration
   - Test in open areas away from magnetic interference
   - Allow device sensor calibration time

2. Performance Optimization:
   - Smooth value interpolation implemented
   - Efficient re-rendering
   - Optimized for mobile battery life

3. Mobile Debug Tools:
   - Chrome DevTools remote debugging
   - Safari Web Inspector for iOS
   - React Developer Tools

## Troubleshooting HTTPS

- Clear browser cache if the certificate isn't recognized
- Ensure your mobile device trusts developer certificates
- For Android devices, enable "USB debugging" for local testing

## Tech Stack

- React 19
- TypeScript 5
- Tailwind CSS 4
- Vite 4

## Deployment Checklist

- [ ] Enable HTTPS on production server
- [ ] Set proper CSP headers for device orientation
- [ ] Test on target mobile devices
- [ ] Verify sensor permissions

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Credits

Created by [Alan C Mathew]
