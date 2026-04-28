import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Contact from './pages/Contact'
import ScrollToTop from './components/Scroll'
import Research from './pages/Research'
import IoTRoboticsProjects from './blogs/Iot-Robotics'
import SmartCaneBlog from './blogs/sub-blogs/smartsensercane'
import CybersecurityProjects from './blogs/Cybersecurity-project'
import WildlifeBlog from './blogs/sub-blogs/Wildlife_Intrusion_Detection-System'
import DDoSTool from './tools/DDOSTool'
import IPMacChanger from './tools/IPMACChanger'
import ARPSpoofDetector from './tools/ARPSpoofDetector'
import HTTPSRustTool from './tools/HTTPSBypass'
import VulnBackdoorScanner from './tools/BackdoorVulnScanner'
import KeyloggerC from './tools/Keylogger'
import PacketSnifferRust from './tools/PacketSniffer'
import DNSSpoofDetector from './tools/DNSSpoofing'
import FileInterceptor from './tools/FileInterceptor'
import CodeInjectorC from './tools/CodeInjector'
import ARPSpoofTool from './tools/ARPSpoofing'
import WildlifeIntrusionSystem from './tools/WildlifeIDS'
import HumanFollowingRobot from './tools/HumanFollowingRobot'
import SmartDoorbell from './tools/SmartDoorbell'
import SecurityRobot from './tools/SecurityRobot'
import FaceTrackingDrone from './tools/FaceTrackingDrone'
import SmartStick from './tools/SmartStick'
import NetworkScanner from './tools/NetworkScanner'
import WiFiTool from './tools/WifiTool'
import GhostKey from './tools/GhostKey'
import Charmy from './tools/Charmy'
import NetSlayer from './tools/NetSlayer'
import DemonKiller from './tools/DemonKiller'
import NoobSlayer from './tools/NoobSlayer'
import Founder from './tools/Founder'
export default function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/Cybersecurity-project" element={<CybersecurityProjects />} />
        <Route path="/projects/iot-robotics-project" element={< IoTRoboticsProjects />} />
        <Route path="/projects/iot-robotics-project/smart-blind-stick" element={< SmartCaneBlog />} />
        <Route path="/projects/iot-robotics-project/wildlife-intrusion" element={< WildlifeBlog />} />


        <Route path="/projects/tools/ddos-testing" element={<DDoSTool />} />
        <Route path="/projects/tools/network-scanner" element={<NetworkScanner />} />
        <Route path="/projects/tools/wifi-deauth" element={<WiFiTool/>} />

        {/* SECURITY TOOLS */}
        <Route path="/projects/tools/ip-mac-changer" element={<IPMacChanger />} />
        <Route path="/projects/tools/arp-spoof" element={<ARPSpoofDetector />} />
        <Route path="/projects/tools/https-bypass" element={<HTTPSRustTool />} />
        <Route path="/projects/tools/backdoor-vuln" element={<VulnBackdoorScanner />} />
        <Route path="/projects/tools/keylogger" element={<KeyloggerC />} />
        <Route path="/projects/tools/packet-sniffer" element={<PacketSnifferRust />} />
        <Route path="/projects/tools/dns-spoofer" element={<DNSSpoofDetector />} />
        <Route path="/projects/tools/file-interceptor" element={<FileInterceptor />} />
        <Route path="/projects/tools/code-injector" element={<CodeInjectorC />} />
        <Route path="/projects/tools/arp-detector" element={<ARPSpoofTool />} />

        {/* IOT/ROBOTICS TOOLS */}
        <Route path="/projects/tools/wildlife-intrusion" element={<WildlifeIntrusionSystem />} />
        <Route path="/projects/tools/human-following-robot" element={<HumanFollowingRobot />} />
        <Route path="/projects/tools/smart-stick" element={<SmartStick />} />
        <Route path="/projects/tools/smart-doorbell" element={<SmartDoorbell />} />
        <Route path="/projects/tools/security-robot" element={<SecurityRobot />} />
        <Route path="/projects/tools/face-tracking-drone" element={<FaceTrackingDrone />} />

        {/* hardware tools */}
        <Route path="/projects/tools/ghost-key" element={<GhostKey />} />
        <Route path="/projects/tools/charmy" element={<Charmy />} />
        <Route path="/projects/tools/net-slayer" element={<NetSlayer />} />
        <Route path="/projects/tools/demon-killer" element={<DemonKiller />} />
        <Route path="/projects/tools/noob-slayer" element={<NoobSlayer />} />


        <Route path="/projects/tools/founder" element={<Founder  />} />

       


        <Route path="/experience" element={<Experience />} />
        <Route path="/research" element={<Research />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  )
}


