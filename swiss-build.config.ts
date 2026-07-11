export default {
  app: { appProjectId: "b9a9efdf-53a5-4e7f-8de7-47e71b3565ab", name: "Build E2E", androidPackageName: "com.remneys.swissbuildtest", iosBundleId: "com.remneys.swissbuildtest" },
  android: { enabled: true, projectDir: "android", gradleWrapper: "android/gradlew" },
  ios: {
    enabled: true, scheme: "demoapp", workspace: "ios/demoapp.xcworkspace",
    signing: { mode: "asc-api", teamId: "LQPQQX6JP6", bundleId: "com.remneys.swissbuildtest", certificateType: "DISTRIBUTION", profileType: "IOS_APP_STORE", profileSpecifier: "SwissBuild Test App Store", codeSignIdentity: "Apple Distribution" }
  }
};
