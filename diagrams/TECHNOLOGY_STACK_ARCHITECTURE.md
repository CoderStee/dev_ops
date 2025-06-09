<?xml version="1.0" encoding="UTF-8"?>
<mxfile host="app.diagrams.net" modified="2025-06-08T00:00:00.000Z" agent="draw.io" etag="version" version="24.0.0" type="device">
  <diagram name="Technology Stack Architecture" id="technology-stack-architecture">
    <mxGraphModel dx="2074" dy="1129" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="1400" pageHeight="1200" background="#ffffff">
      <root>
        <mxCell id="0"/>
        <mxCell id="1" parent="0"/>
        
        <!-- Title -->
        <mxCell id="title" value="Technology Stack Architecture - Complete Development &amp; Production Stack" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=20;fontStyle=1;fontColor=#2E3440;" vertex="1" parent="1">
          <mxGeometry x="200" y="20" width="1000" height="40" as="geometry"/>
        </mxCell>
        
        <!-- Runtime Environment Layer -->
        <mxCell id="runtime-container" value="" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E8F5E8;strokeColor=#4CAF50;strokeWidth=2;" vertex="1" parent="1">
          <mxGeometry x="80" y="80" width="1240" height="120" as="geometry"/>
        </mxCell>
        <mxCell id="runtime-label" value="RUNTIME ENVIRONMENT &amp; CORE TECHNOLOGIES" style="text;html=1;strokeColor=none;fillColor=#4CAF50;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=1;fontSize=14;fontStyle=1;fontColor=#ffffff;" vertex="1" parent="1">
          <mxGeometry x="580" y="90" width="320" height="30" as="geometry"/>
        </mxCell>
        
        <!-- Core Runtime -->
        <mxCell id="nodejs" value="🟢 Node.js v20&#xa;JavaScript Runtime&#xa;• V8 Engine&#xa;• Event Loop&#xa;• NPM Ecosystem&#xa;• Alpine Linux Base" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#C8E6C9;strokeColor=#66BB6A;fontStyle=1;fontSize=11;align=left;" vertex="1" parent="1">
          <mxGeometry x="120" y="130" width="150" height="60" as="geometry"/>
        </mxCell>
        
        <mxCell id="express" value="⚡ Express.js v4.18.2&#xa;Web Application Framework&#xa;• HTTP Server&#xa;• Middleware System&#xa;• Routing Engine&#xa;• RESTful API Support" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#C8E6C9;strokeColor=#66BB6A;fontStyle=1;fontSize=11;align=left;" vertex="1" parent="1">
          <mxGeometry x="290" y="130" width="150" height="60" as="geometry"/>
        </mxCell>
        
        <mxCell id="javascript" value="📜 JavaScript ES2022&#xa;Programming Language&#xa;• Async/Await&#xa;• Modules (CommonJS)&#xa;• JSON Processing&#xa;• Error Handling" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#C8E6C9;strokeColor=#66BB6A;fontStyle=1;fontSize=11;align=left;" vertex="1" parent="1">
          <mxGeometry x="460" y="130" width="150" height="60" as="geometry"/>
        </mxCell>
        
        <mxCell id="npm" value="📦 NPM v10&#xa;Package Manager&#xa;• Dependency Management&#xa;• Script Execution&#xa;• Registry Access&#xa;• Audit Security" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#C8E6C9;strokeColor=#66BB6A;fontStyle=1;fontSize=11;align=left;" vertex="1" parent="1">
          <mxGeometry x="630" y="130" width="150" height="60" as="geometry"/>
        </mxCell>
        
        <mxCell id="alpine" value="🏔️ Alpine Linux 3.21&#xa;Container Base OS&#xa;• Minimal Footprint&#xa;• Security Focused&#xa;• Package Manager (apk)&#xa;• Multi-arch Support" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#C8E6C9;strokeColor=#66BB6A;fontStyle=1;fontSize=11;align=left;" vertex="1" parent="1">
          <mxGeometry x="800" y="130" width="150" height="60" as="geometry"/>
        </mxCell>
        
        <mxCell id="docker" value="🐳 Docker 24.0&#xa;Containerization Platform&#xa;• Image Building&#xa;• Container Runtime&#xa;• Layer Caching&#xa;• Health Checks" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#C8E6C9;strokeColor=#66BB6A;fontStyle=1;fontSize=11;align=left;" vertex="1" parent="1">
          <mxGeometry x="970" y="130" width="150" height="60" as="geometry"/>
        </mxCell>
        
        <mxCell id="json" value="📄 JSON&#xa;Data Format&#xa;• Configuration&#xa;• API Responses&#xa;• Package Manifest&#xa;• Test Reports" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#C8E6C9;strokeColor=#66BB6A;fontStyle=1;fontSize=11;align=left;" vertex="1" parent="1">
          <mxGeometry x="1140" y="130" width="150" height="60" as="geometry"/>
        </mxCell>
        
        <!-- Production Dependencies Layer -->
        <mxCell id="prod-deps-container" value="" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E3F2FD;strokeColor=#1976D2;strokeWidth=2;" vertex="1" parent="1">
          <mxGeometry x="80" y="220" width="1240" height="140" as="geometry"/>
        </mxCell>
        <mxCell id="prod-deps-label" value="PRODUCTION DEPENDENCIES (4 PACKAGES)" style="text;html=1;strokeColor=none;fillColor=#1976D2;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=1;fontSize=14;fontStyle=1;fontColor=#ffffff;" vertex="1" parent="1">
          <mxGeometry x="580" y="230" width="280" height="30" as="geometry"/>
        </mxCell>
        
        <!-- Production Dependencies -->
        <mxCell id="helmet" value="🛡️ Helmet v7.1.0&#xa;Security Middleware&#xa;• Content Security Policy&#xa;• XSS Protection&#xa;• HSTS Headers&#xa;• Frameguard&#xa;• DNS Prefetch Control&#xa;• IE No Open&#xa;• X-Powered-By Removal" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#BBDEFB;strokeColor=#1565C0;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="120" y="270" width="180" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="morgan" value="📝 Morgan v1.10.0&#xa;HTTP Request Logger&#xa;• Request Logging&#xa;• Response Time&#xa;• Status Codes&#xa;• IP Addresses&#xa;• User Agents&#xa;• Custom Formats&#xa;• Combined/Dev Modes" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#BBDEFB;strokeColor=#1565C0;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="320" y="270" width="180" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="dotenv" value="🔧 Dotenv v16.3.1&#xa;Environment Configuration&#xa;• .env File Loading&#xa;• Environment Variables&#xa;• Configuration Management&#xa;• Development/Production&#xa;• Secret Management&#xa;• Path Resolution&#xa;• Encoding Support" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#BBDEFB;strokeColor=#1565C0;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="520" y="270" width="180" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="express-built-in" value="⚡ Express Built-ins&#xa;Included Middleware&#xa;• express.json()&#xa;• express.static()&#xa;• express.Router()&#xa;• Body Parsing&#xa;• Query Parsing&#xa;• Parameter Handling&#xa;• Error Handling" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#BBDEFB;strokeColor=#1565C0;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="720" y="270" width="180" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="http-https" value="🌐 HTTP/HTTPS&#xa;Network Protocols&#xa;• RESTful APIs&#xa;• JSON Responses&#xa;• Status Codes&#xa;• Headers Management&#xa;• Keep-Alive&#xa;• Compression&#xa;• SSL/TLS Support" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#BBDEFB;strokeColor=#1565C0;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="920" y="270" width="180" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="custom-middleware" value="🔄 Custom Middleware&#xa;Application-Specific&#xa;• Timeout Handling&#xa;• Request Validation&#xa;• Error Processing&#xa;• Response Formatting&#xa;• Resource Cleanup&#xa;• Graceful Shutdown&#xa;• Performance Monitoring" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#BBDEFB;strokeColor=#1565C0;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="1120" y="270" width="180" height="80" as="geometry"/>
        </mxCell>
        
        <!-- Development Dependencies Layer -->
        <mxCell id="dev-deps-container" value="" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFF3E0;strokeColor=#FF9800;strokeWidth=2;" vertex="1" parent="1">
          <mxGeometry x="80" y="380" width="1240" height="140" as="geometry"/>
        </mxCell>
        <mxCell id="dev-deps-label" value="DEVELOPMENT DEPENDENCIES (5 PACKAGES)" style="text;html=1;strokeColor=none;fillColor=#FF9800;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=1;fontSize=14;fontStyle=1;fontColor=#ffffff;" vertex="1" parent="1">
          <mxGeometry x="580" y="390" width="280" height="30" as="geometry"/>
        </mxCell>
        
        <!-- Development Tools -->
        <mxCell id="jest" value="🧪 Jest v29.7.0&#xa;Testing Framework&#xa;• Unit Testing&#xa;• Integration Testing&#xa;• Test Runners&#xa;• Code Coverage&#xa;• Mock Functions&#xa;• Snapshot Testing&#xa;• Assertion Library" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFE0B2;strokeColor=#FB8C00;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="120" y="430" width="180" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="supertest" value="🔬 Supertest v6.3.3&#xa;HTTP Testing Library&#xa;• API Testing&#xa;• HTTP Assertions&#xa;• Express Testing&#xa;• Request Simulation&#xa;• Response Validation&#xa;• Status Code Testing&#xa;• JSON Validation" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFE0B2;strokeColor=#FB8C00;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="320" y="430" width="180" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="eslint" value="🔍 ESLint v8.57.0&#xa;JavaScript Linter&#xa;• Code Quality&#xa;• Style Enforcement&#xa;• Error Detection&#xa;• Best Practices&#xa;• Configurable Rules&#xa;• Plugin System&#xa;• IDE Integration" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFE0B2;strokeColor=#FB8C00;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="520" y="430" width="180" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="prettier" value="✨ Prettier v3.2.5&#xa;Code Formatter&#xa;• Automatic Formatting&#xa;• Style Consistency&#xa;• Multi-language Support&#xa;• Editor Integration&#xa;• Git Hook Integration&#xa;• Configuration Files&#xa;• Team Standards" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFE0B2;strokeColor=#FB8C00;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="720" y="430" width="180" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="nodemon" value="🔄 Nodemon v3.0.1&#xa;Development Server&#xa;• File Watching&#xa;• Automatic Restart&#xa;• Hot Reloading&#xa;• Process Management&#xa;• Configuration Support&#xa;• Signal Handling&#xa;• Cross-platform" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFE0B2;strokeColor=#FB8C00;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="920" y="430" width="180" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="dev-tools" value="🛠️ Development Tools&#xa;Supporting Technologies&#xa;• Git Version Control&#xa;• VS Code/WebStorm&#xa;• Terminal/Shell&#xa;• Package Managers&#xa;• Debugging Tools&#xa;• Performance Profilers&#xa;• Browser DevTools" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFE0B2;strokeColor=#FB8C00;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="1120" y="430" width="180" height="80" as="geometry"/>
        </mxCell>
        
        <!-- DevOps & CI/CD Layer -->
        <mxCell id="devops-container" value="" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#F3E5F5;strokeColor=#9C27B0;strokeWidth=2;" vertex="1" parent="1">
          <mxGeometry x="80" y="540" width="1240" height="140" as="geometry"/>
        </mxCell>
        <mxCell id="devops-label" value="DEVOPS &amp; CI/CD TECHNOLOGIES" style="text;html=1;strokeColor=none;fillColor=#9C27B0;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=1;fontSize=14;fontStyle=1;fontColor=#ffffff;" vertex="1" parent="1">
          <mxGeometry x="580" y="550" width="240" height="30" as="geometry"/>
        </mxCell>
        
        <!-- DevOps Tools -->
        <mxCell id="github-actions" value="🔄 GitHub Actions&#xa;CI/CD Platform&#xa;• Workflow Automation&#xa;• Event-driven Triggers&#xa;• Multi-OS Runners&#xa;• Secret Management&#xa;• Matrix Builds&#xa;• Artifact Storage&#xa;• Custom Actions" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E1BEE7;strokeColor=#8E24AA;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="120" y="590" width="180" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="docker-buildx" value="🏗️ Docker Buildx&#xa;Advanced Build Engine&#xa;• Multi-platform Builds&#xa;• Build Cache&#xa;• BuildKit Backend&#xa;• Layer Optimization&#xa;• Build Contexts&#xa;• Image Export&#xa;• Registry Push" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E1BEE7;strokeColor=#8E24AA;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="320" y="590" width="180" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="git" value="📁 Git v2.45&#xa;Version Control System&#xa;• Repository Management&#xa;• Branch Management&#xa;• Merge Strategies&#xa;• Tag Management&#xa;• Remote Repositories&#xa;• Conflict Resolution&#xa;• History Tracking" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E1BEE7;strokeColor=#8E24AA;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="520" y="590" width="180" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="yaml" value="📄 YAML&#xa;Configuration Language&#xa;• Workflow Definitions&#xa;• Docker Compose&#xa;• Configuration Files&#xa;• Human Readable&#xa;• Data Serialization&#xa;• Multi-document&#xa;• Comments Support" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E1BEE7;strokeColor=#8E24AA;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="720" y="590" width="180" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="bash-shell" value="🐚 Bash/Shell&#xa;Command Line Interface&#xa;• Script Automation&#xa;• System Commands&#xa;• Process Control&#xa;• Environment Variables&#xa;• Pipeline Operations&#xa;• File Operations&#xa;• Text Processing" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E1BEE7;strokeColor=#8E24AA;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="920" y="590" width="180" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="markdown" value="📝 Markdown&#xa;Documentation Format&#xa;• README Files&#xa;• Documentation&#xa;• Issue Templates&#xa;• Pull Request Templates&#xa;• Wiki Pages&#xa;• Code Comments&#xa;• GitHub Integration" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E1BEE7;strokeColor=#8E24AA;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="1120" y="590" width="180" height="80" as="geometry"/>
        </mxCell>
        
        <!-- Cloud Platform Layer -->
        <mxCell id="cloud-container" value="" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFEBEE;strokeColor=#F44336;strokeWidth=2;" vertex="1" parent="1">
          <mxGeometry x="80" y="700" width="1240" height="140" as="geometry"/>
        </mxCell>
        <mxCell id="cloud-label" value="GOOGLE CLOUD PLATFORM TECHNOLOGIES" style="text;html=1;strokeColor=none;fillColor=#F44336;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=1;fontSize=14;fontStyle=1;fontColor=#ffffff;" vertex="1" parent="1">
          <mxGeometry x="580" y="710" width="280" height="30" as="geometry"/>
        </mxCell>
        
        <!-- Cloud Services -->
        <mxCell id="cloud-run" value="☁️ Cloud Run&#xa;Serverless Container Platform&#xa;• Container Hosting&#xa;• Auto-scaling&#xa;• Pay-per-use&#xa;• HTTPS Endpoints&#xa;• Traffic Management&#xa;• Revision Control&#xa;• Regional Deployment" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFCDD2;strokeColor=#E57373;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="120" y="750" width="180" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="artifact-registry" value="🗃️ Artifact Registry&#xa;Container Image Storage&#xa;• Docker Images&#xa;• Version Management&#xa;• Access Control&#xa;• Regional Storage&#xa;• Vulnerability Scanning&#xa;• Multi-format Support&#xa;• Integration APIs" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFCDD2;strokeColor=#E57373;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="320" y="750" width="180" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="cloud-storage" value="🗄️ Cloud Storage&#xa;Object Storage Service&#xa;• File Storage&#xa;• Test Artifacts&#xa;• Deployment Logs&#xa;• Static Assets&#xa;• Backup Storage&#xa;• Global Distribution&#xa;• Lifecycle Management" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFCDD2;strokeColor=#E57373;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="520" y="750" width="180" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="iam" value="🔐 Identity &amp; Access Management&#xa;Security &amp; Permissions&#xa;• Service Accounts&#xa;• Role-based Access&#xa;• API Keys&#xa;• OAuth 2.0&#xa;• Resource Policies&#xa;• Audit Logging&#xa;• Multi-factor Auth" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFCDD2;strokeColor=#E57373;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="720" y="750" width="180" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="cloud-logging" value="📊 Cloud Logging&#xa;Logging &amp; Monitoring&#xa;• Application Logs&#xa;• System Metrics&#xa;• Error Reporting&#xa;• Performance Monitoring&#xa;• Alerting&#xa;• Log Analysis&#xa;• Dashboards" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFCDD2;strokeColor=#E57373;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="920" y="750" width="180" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="gcloud-cli" value="⚙️ gcloud CLI&#xa;Command Line Tool&#xa;• Resource Management&#xa;• Deployment Automation&#xa;• Configuration&#xa;• Authentication&#xa;• Project Management&#xa;• Service Control&#xa;• Scripting Support" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFCDD2;strokeColor=#E57373;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="1120" y="750" width="180" height="80" as="geometry"/>
        </mxCell>
        
        <!-- Supporting Technologies -->
        <mxCell id="supporting-container" value="" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E1F5FE;strokeColor=#0288D1;strokeWidth=2;" vertex="1" parent="1">
          <mxGeometry x="80" y="860" width="1240" height="140" as="geometry"/>
        </mxCell>
        <mxCell id="supporting-label" value="SUPPORTING TECHNOLOGIES &amp; PROTOCOLS" style="text;html=1;strokeColor=none;fillColor=#0288D1;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=1;fontSize=14;fontStyle=1;fontColor=#ffffff;" vertex="1" parent="1">
          <mxGeometry x="580" y="870" width="280" height="30" as="geometry"/>
        </mxCell>
        
        <!-- Supporting Tech -->
        <mxCell id="curl" value="🌐 cURL&#xa;HTTP Client Tool&#xa;• API Testing&#xa;• Health Checks&#xa;• Data Transfer&#xa;• Request Headers&#xa;• Response Validation&#xa;• Authentication&#xa;• SSL/TLS Support" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#B3E5FC;strokeColor=#0277BD;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="120" y="910" width="150" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="regex" value="📝 Regular Expressions&#xa;Pattern Matching&#xa;• Text Processing&#xa;• Validation&#xa;• Search &amp; Replace&#xa;• Log Parsing&#xa;• Data Extraction&#xa;• Input Sanitization" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#B3E5FC;strokeColor=#0277BD;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="290" y="910" width="150" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="utf8" value="🔤 UTF-8 Encoding&#xa;Character Encoding&#xa;• Unicode Support&#xa;• Multi-language&#xa;• Text Processing&#xa;• File Encoding&#xa;• Database Storage&#xa;• API Communication" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#B3E5FC;strokeColor=#0277BD;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="460" y="910" width="150" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="tcp-ip" value="🌍 TCP/IP&#xa;Network Protocol Stack&#xa;• Internet Protocol&#xa;• Transport Layer&#xa;• Socket Communication&#xa;• Port Management&#xa;• Network Routing&#xa;• Packet Handling" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#B3E5FC;strokeColor=#0277BD;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="630" y="910" width="150" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="rest-api" value="🔗 REST API&#xa;Architectural Style&#xa;• HTTP Methods&#xa;• Resource-based URLs&#xa;• Stateless Communication&#xa;• JSON Data Format&#xa;• Status Codes&#xa;• Cacheable Responses" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#B3E5FC;strokeColor=#0277BD;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="800" y="910" width="150" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="tls-ssl" value="🔒 TLS/SSL&#xa;Security Protocols&#xa;• Data Encryption&#xa;• Certificate Management&#xa;• HTTPS Support&#xa;• Secure Communication&#xa;• Public Key Infrastructure&#xa;• Trust Validation" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#B3E5FC;strokeColor=#0277BD;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="970" y="910" width="150" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="mime-types" value="📋 MIME Types&#xa;Content Type System&#xa;• application/json&#xa;• text/html&#xa;• text/plain&#xa;• Content Negotiation&#xa;• File Type Detection&#xa;• Media Type Handling" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#B3E5FC;strokeColor=#0277BD;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="1140" y="910" width="150" height="80" as="geometry"/>
        </mxCell>
        
        <!-- Technology Dependencies -->
        <mxCell id="nodejs-to-express" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeWidth=2;strokeColor=#4CAF50;" edge="1" parent="1" source="nodejs" target="express">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>
        <mxCell id="nodejs-express-label" value="runs on" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];fontSize=9;fontStyle=1;fontColor=#4CAF50;" vertex="1" connectable="0" parent="nodejs-to-express">
          <mxGeometry x="-0.1" y="1" relative="1" as="geometry"/>
        </mxCell>
        
        <mxCell id="express-to-helmet" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeWidth=2;strokeColor=#1976D2;" edge="1" parent="1" source="express" target="helmet">
          <mxGeometry relative="1" as="geometry">
            <Array as="points">
              <mxPoint x="365" y="210" />
              <mxPoint x="210" y="210" />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id="express-helmet-label" value="uses" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];fontSize=9;fontStyle=1;fontColor=#1976D2;" vertex="1" connectable="0" parent="express-to-helmet">
          <mxGeometry x="-0.1" y="1" relative="1" as="geometry"/>
        </mxCell>
        
        <mxCell id="docker-to-alpine" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeWidth=2;strokeColor=#4CAF50;" edge="1" parent="1" source="docker" target="alpine">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>
        <mxCell id="docker-alpine-label" value="base image" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];fontSize=9;fontStyle=1;fontColor=#4CAF50;" vertex="1" connectable="0" parent="docker-to-alpine">
          <mxGeometry x="-0.1" y="1" relative="1" as="geometry"/>
        </mxCell>
        
        <mxCell id="jest-to-supertest" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeWidth=2;strokeColor=#FF9800;" edge="1" parent="1" source="jest" target="supertest">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>
        <mxCell id="jest-supertest-label" value="integrates" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];fontSize=9;fontStyle=1;fontColor=#FF9800;" vertex="1" connectable="0" parent="jest-to-supertest">
          <mxGeometry x="-0.1" y="1" relative="1" as="geometry"/>
        </mxCell>
        
        <mxCell id="github-actions-to-docker" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeWidth=2;strokeColor=#9C27B0;" edge="1" parent="1" source="github-actions" target="docker-buildx">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>
        <mxCell id="ga-docker-label" value="orchestrates" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];fontSize=9;fontStyle=1;fontColor=#9C27B0;" vertex="1" connectable="0" parent="github-actions-to-docker">
          <mxGeometry x="-0.1" y="1" relative="1" as="geometry"/>
        </mxCell>
        
        <mxCell id="cloud-run-to-artifact" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeWidth=2;strokeColor=#F44336;" edge="1" parent="1" source="cloud-run" target="artifact-registry">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>
        <mxCell id="cr-ar-label" value="deploys from" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];fontSize=9;fontStyle=1;fontColor=#F44336;" vertex="1" connectable="0" parent="cloud-run-to-artifact">
          <mxGeometry x="-0.1" y="1" relative="1" as="geometry"/>
        </mxCell>
        
        <!-- Stack Summary -->
        <mxCell id="stack-summary-container" value="" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFF9C4;strokeColor=#F9A825;strokeWidth=2;" vertex="1" parent="1">
          <mxGeometry x="80" y="1020" width="1240" height="100" as="geometry"/>
        </mxCell>
        <mxCell id="stack-summary-text" value="📋 TECHNOLOGY STACK OVERVIEW: Web application technology stack with DevOps automation&#xa;• Node.js 20 + Express.js 4 web framework • 4 production + 5 development dependencies • Testing with Jest + Supertest&#xa;• Code quality with ESLint + Prettier • Containerized with Docker on Alpine Linux • GitHub Actions CI/CD with 6 workflows&#xa;• Google Cloud Platform deployment with Cloud Run, Artifact Registry, and Cloud Storage • Security with Helmet middleware&#xa;• Development toolkit with hot reloading, linting, formatting, and automated testing" style="text;html=1;strokeColor=none;fillColor=#FFF9C4;align=left;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=11;fontStyle=0;fontColor=#F57F17;" vertex="1" parent="1">
          <mxGeometry x="100" y="1030" width="1200" height="80" as="geometry"/>
        </mxCell>
        
      </root>
    </mxGraphModel>
  </diagram>
</mxfile>