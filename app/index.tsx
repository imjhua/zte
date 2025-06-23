import { StyleSheet } from 'react-native'

import { WebView } from 'react-native-webview'
import { SafeAreaView } from 'react-native-safe-area-context'

const URI =
  // 'http://idlt.localhost:8080/yoga-glossary'
  'https://idlt-apps-web.vercel.app/yoga-glossary'

const Page = () => {
  return (
     <SafeAreaView style={{ flex: 1, backgroundColor: '#f8fafc' }}>
      <WebView source={{ uri: URI }} allowsBackForwardNavigationGestures style={{ flex: 1, backgroundColor: '#f8fafc' }} />
    </SafeAreaView>
  )
}

export default Page

const styles = StyleSheet.create({})
