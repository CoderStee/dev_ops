<?xml version="1.0" encoding="UTF-8"?>
<mxfile host="app.diagrams.net" modified="2025-06-08T00:00:00.000Z" agent="draw.io Desktop" etag="version" version="24.0.0" type="device">
  <diagram name="Network Security &amp; Access Control Architecture" id="network-security-access-control">
    <mxGraphModel dx="2074" dy="1129" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="1400" pageHeight="1100" background="#ffffff">
      <root>
        <mxCell id="0"/>
        <mxCell id="1" parent="0"/>
        
        <!-- Title -->
        <mxCell id="title" value="Network Security &amp; Access Control Architecture" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=20;fontStyle=1;fontColor=#2E3440;" vertex="1" parent="1">
          <mxGeometry x="200" y="20" width="1000" height="40" as="geometry"/>
        </mxCell>
        
        <!-- Internet/External Layer -->
        <mxCell id="internet-container" value="" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFEBEE;strokeColor=#F44336;strokeWidth=2;" vertex="1" parent="1">
          <mxGeometry x="80" y="80" width="1240" height="100" as="geometry"/>
        </mxCell>
        <mxCell id="internet-label" value="INTERNET &amp; EXTERNAL THREATS" style="text;html=1;strokeColor=none;fillColor=#F44336;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=1;fontSize=14;fontStyle=1;fontColor=#ffffff;" vertex="1" parent="1">
          <mxGeometry x="600" y="90" width="240" height="30" as="geometry"/>
        </mxCell>
        
        <!-- External Threats -->
        <mxCell id="ddos-attacks" value="⚡ DDoS Attacks&#xa;Distributed attacks&#xa;Traffic flooding" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFCDD2;strokeColor=#E57373;fontStyle=1;fontSize=10;align=center;" vertex="1" parent="1">
          <mxGeometry x="120" y="130" width="120" height="40" as="geometry"/>
        </mxCell>
        
        <mxCell id="malicious-requests" value="🚫 Malicious Requests&#xa;SQL injection attempts&#xa;XSS attacks" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFCDD2;strokeColor=#E57373;fontStyle=1;fontSize=10;align=center;" vertex="1" parent="1">
          <mxGeometry x="260" y="130" width="120" height="40" as="geometry"/>
        </mxCell>
        
        <mxCell id="bots-crawlers" value="🤖 Bots &amp; Crawlers&#xa;Automated scanning&#xa;Resource exhaustion" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFCDD2;strokeColor=#E57373;fontStyle=1;fontSize=10;align=center;" vertex="1" parent="1">
          <mxGeometry x="400" y="130" width="120" height="40" as="geometry"/>
        </mxCell>
        
        <mxCell id="unauthorized-access" value="🔓 Unauthorized Access&#xa;Authentication bypass&#xa;Privilege escalation" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFCDD2;strokeColor=#E57373;fontStyle=1;fontSize=10;align=center;" vertex="1" parent="1">
          <mxGeometry x="540" y="130" width="120" height="40" as="geometry"/>
        </mxCell>
        
        <mxCell id="data-interception" value="🕵️ Data Interception&#xa;Man-in-the-middle&#xa;Packet sniffing" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFCDD2;strokeColor=#E57373;fontStyle=1;fontSize=10;align=center;" vertex="1" parent="1">
          <mxGeometry x="680" y="130" width="120" height="40" as="geometry"/>
        </mxCell>
        
        <mxCell id="vulnerability-scans" value="🔍 Vulnerability Scans&#xa;Port scanning&#xa;Service enumeration" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFCDD2;strokeColor=#E57373;fontStyle=1;fontSize=10;align=center;" vertex="1" parent="1">
          <mxGeometry x="820" y="130" width="120" height="40" as="geometry"/>
        </mxCell>
        
        <mxCell id="social-engineering" value="👥 Social Engineering&#xa;Phishing attempts&#xa;Credential theft" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFCDD2;strokeColor=#E57373;fontStyle=1;fontSize=10;align=center;" vertex="1" parent="1">
          <mxGeometry x="960" y="130" width="120" height="40" as="geometry"/>
        </mxCell>
        
        <mxCell id="supply-chain" value="🔗 Supply Chain&#xa;Dependency attacks&#xa;Package compromises" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFCDD2;strokeColor=#E57373;fontStyle=1;fontSize=10;align=center;" vertex="1" parent="1">
          <mxGeometry x="1100" y="130" width="120" height="40" as="geometry"/>
        </mxCell>
        
        <!-- Google Cloud Security Layer -->
        <mxCell id="gcp-security-container" value="" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E8F5E8;strokeColor=#4CAF50;strokeWidth=2;" vertex="1" parent="1">
          <mxGeometry x="80" y="200" width="1240" height="140" as="geometry"/>
        </mxCell>
        <mxCell id="gcp-security-label" value="GOOGLE CLOUD PLATFORM SECURITY LAYER" style="text;html=1;strokeColor=none;fillColor=#4CAF50;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=1;fontSize=14;fontStyle=1;fontColor=#ffffff;" vertex="1" parent="1">
          <mxGeometry x="580" y="210" width="320" height="30" as="geometry"/>
        </mxCell>
        
        <!-- GCP Security Services -->
        <mxCell id="cloud-armor" value="🛡️ Cloud Armor&#xa;DDoS Protection&#xa;• L3/L4 DDoS mitigation&#xa;• WAF capabilities&#xa;• IP whitelisting/blacklisting&#xa;• Rate limiting&#xa;• Geographic restrictions" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#C8E6C9;strokeColor=#66BB6A;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="120" y="250" width="180" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="global-load-balancer" value="⚖️ Global Load Balancer&#xa;Traffic Distribution&#xa;• SSL termination&#xa;• HTTPS redirect&#xa;• Health checks&#xa;• Failover handling&#xa;• Regional routing" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#C8E6C9;strokeColor=#66BB6A;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="320" y="250" width="180" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="vpc-network" value="🌐 VPC Network&#xa;Network Isolation&#xa;• Private IP ranges&#xa;• Subnet segregation&#xa;• Firewall rules&#xa;• Network tags&#xa;• Egress controls" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#C8E6C9;strokeColor=#66BB6A;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="520" y="250" width="180" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="iam-security" value="🔐 IAM Security&#xa;Identity Management&#xa;• Service accounts&#xa;• Role-based access (RBAC)&#xa;• Least privilege principle&#xa;• Multi-factor authentication&#xa;• Audit logging" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#C8E6C9;strokeColor=#66BB6A;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="720" y="250" width="180" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="secret-manager" value="🔑 Secret Manager&#xa;Credential Storage&#xa;• API keys protection&#xa;• Certificate management&#xa;• Automatic rotation&#xa;• Access auditing&#xa;• Encryption at rest" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#C8E6C9;strokeColor=#66BB6A;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="920" y="250" width="180" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="cloud-kms" value="🔐 Cloud KMS&#xa;Key Management&#xa;• Encryption keys&#xa;• Key rotation&#xa;• Hardware security modules&#xa;• Compliance standards&#xa;• Regional encryption" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#C8E6C9;strokeColor=#66BB6A;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="1120" y="250" width="180" height="80" as="geometry"/>
        </mxCell>
        
        <!-- Application Security Layer -->
        <mxCell id="app-security-container" value="" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E3F2FD;strokeColor=#1976D2;strokeWidth=2;" vertex="1" parent="1">
          <mxGeometry x="80" y="360" width="1240" height="140" as="geometry"/>
        </mxCell>
        <mxCell id="app-security-label" value="APPLICATION SECURITY LAYER" style="text;html=1;strokeColor=none;fillColor=#1976D2;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=1;fontSize=14;fontStyle=1;fontColor=#ffffff;" vertex="1" parent="1">
          <mxGeometry x="600" y="370" width="240" height="30" as="geometry"/>
        </mxCell>
        
        <!-- Application Security Components -->
        <mxCell id="helmet-security" value="🛡️ Helmet.js Security&#xa;HTTP Headers Protection&#xa;• Content Security Policy&#xa;• X-XSS-Protection&#xa;• X-Frame-Options (clickjacking)&#xa;• HSTS (SSL enforcement)&#xa;• X-Content-Type-Options&#xa;• DNS prefetch control" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#BBDEFB;strokeColor=#1565C0;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="120" y="410" width="200" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="input-validation" value="✅ Input Validation&#xa;Request Sanitization&#xa;• JSON parsing limits (1MB)&#xa;• Request timeout (5s)&#xa;• Parameter validation&#xa;• Content-type checking&#xa;• Query string sanitization&#xa;• Body size limits" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#BBDEFB;strokeColor=#1565C0;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="340" y="410" width="200" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="error-handling" value="⚠️ Secure Error Handling&#xa;Information Disclosure Prevention&#xa;• Generic error messages&#xa;• Stack trace truncation&#xa;• Log sanitization&#xa;• Error code mapping&#xa;• Debug info filtering&#xa;• Production error modes" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#BBDEFB;strokeColor=#1565C0;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="560" y="410" width="200" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="cors-security" value="🌍 CORS Security&#xa;Cross-Origin Controls&#xa;• Origin validation&#xa;• Method restrictions&#xa;• Header whitelisting&#xa;• Credential handling&#xa;• Preflight requests&#xa;• Domain restrictions" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#BBDEFB;strokeColor=#1565C0;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="780" y="410" width="200" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="rate-limiting" value="🚦 Rate Limiting&#xa;Traffic Control&#xa;• Request rate limits&#xa;• IP-based throttling&#xa;• Endpoint-specific limits&#xa;• Burst protection&#xa;• Queue management&#xa;• Circuit breakers" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#BBDEFB;strokeColor=#1565C0;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="1000" y="410" width="200" height="80" as="geometry"/>
        </mxCell>
        
        <!-- Container Security Layer -->
        <mxCell id="container-security-container" value="" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFF3E0;strokeColor=#FF9800;strokeWidth=2;" vertex="1" parent="1">
          <mxGeometry x="80" y="520" width="1240" height="140" as="geometry"/>
        </mxCell>
        <mxCell id="container-security-label" value="CONTAINER &amp; RUNTIME SECURITY" style="text;html=1;strokeColor=none;fillColor=#FF9800;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=1;fontSize=14;fontStyle=1;fontColor=#ffffff;" vertex="1" parent="1">
          <mxGeometry x="600" y="530" width="240" height="30" as="geometry"/>
        </mxCell>
        
        <!-- Container Security -->
        <mxCell id="base-image-security" value="🏔️ Base Image Security&#xa;Alpine Linux Hardening&#xa;• Minimal attack surface&#xa;• Regular security updates&#xa;• No unnecessary packages&#xa;• Root filesystem read-only&#xa;• Non-root user execution&#xa;• Vulnerability scanning" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFE0B2;strokeColor=#FB8C00;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="120" y="570" width="200" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="container-isolation" value="🔒 Container Isolation&#xa;Runtime Protection&#xa;• Process isolation&#xa;• Namespace separation&#xa;• Resource limits (CPU/Memory)&#xa;• Capability dropping&#xa;• Seccomp profiles&#xa;• AppArmor/SELinux" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFE0B2;strokeColor=#FB8C00;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="340" y="570" width="200" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="health-checks" value="💚 Health Monitoring&#xa;Runtime Verification&#xa;• Application health checks&#xa;• Container liveness probes&#xa;• Readiness verification&#xa;• Performance monitoring&#xa;• Resource utilization&#xa;• Anomaly detection" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFE0B2;strokeColor=#FB8C00;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="560" y="570" width="200" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="image-scanning" value="🔍 Image Vulnerability Scanning&#xa;Supply Chain Security&#xa;• Base image scanning&#xa;• Dependency analysis&#xa;• CVE detection&#xa;• License compliance&#xa;• Policy enforcement&#xa;• Continuous monitoring" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFE0B2;strokeColor=#FB8C00;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="780" y="570" width="200" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="secrets-mgmt" value="🔑 Secrets Management&#xa;Runtime Credential Security&#xa;• Environment variable encryption&#xa;• Secret injection at runtime&#xa;• No hardcoded credentials&#xa;• Automatic rotation&#xa;• Audit trail&#xa;• Secure storage" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFE0B2;strokeColor=#FB8C00;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="1000" y="570" width="200" height="80" as="geometry"/>
        </mxCell>
        
        <!-- CI/CD Security Layer -->
        <mxCell id="cicd-security-container" value="" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#F3E5F5;strokeColor=#9C27B0;strokeWidth=2;" vertex="1" parent="1">
          <mxGeometry x="80" y="680" width="1240" height="140" as="geometry"/>
        </mxCell>
        <mxCell id="cicd-security-label" value="CI/CD PIPELINE SECURITY" style="text;html=1;strokeColor=none;fillColor=#9C27B0;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=1;fontSize=14;fontStyle=1;fontColor=#ffffff;" vertex="1" parent="1">
          <mxGeometry x="600" y="690" width="200" height="30" as="geometry"/>
        </mxCell>
        
        <!-- CI/CD Security -->
        <mxCell id="github-security" value="🔐 GitHub Security&#xa;Repository Protection&#xa;• Branch protection rules&#xa;• Required status checks&#xa;• Code review requirements&#xa;• Secret scanning&#xa;• Dependency alerts&#xa;• Security advisories" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E1BEE7;strokeColor=#8E24AA;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="120" y="730" width="200" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="npm-audit" value="📋 NPM Security Audit&#xa;Dependency Scanning&#xa;• Vulnerability scanning&#xa;• High-severity detection&#xa;• Automated security updates&#xa;• License compliance&#xa;• Package integrity&#xa;• Supply chain analysis" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E1BEE7;strokeColor=#8E24AA;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="340" y="730" width="200" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="secrets-github" value="🔑 GitHub Secrets&#xa;CI/CD Credential Management&#xa;• Encrypted storage&#xa;• Environment-specific secrets&#xa;• Access logging&#xa;• Rotation policies&#xa;• Principle of least privilege&#xa;• Audit trails" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E1BEE7;strokeColor=#8E24AA;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="560" y="730" width="200" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="code-quality" value="🔍 Code Quality Gates&#xa;Security-First Development&#xa;• Static code analysis&#xa;• Linting rules enforcement&#xa;• Format validation&#xa;• Test coverage requirements&#xa;• Security rule compliance&#xa;• Merge blocking" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E1BEE7;strokeColor=#8E24AA;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="780" y="730" width="200" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="deployment-security" value="🚀 Secure Deployment&#xa;Production Security&#xa;• Environment isolation&#xa;• Zero-downtime deployment&#xa;• Rollback capabilities&#xa;• Health verification&#xa;• Access logging&#xa;• Change tracking" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E1BEE7;strokeColor=#8E24AA;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="1000" y="730" width="200" height="80" as="geometry"/>
        </mxCell>
        
        <!-- Monitoring & Compliance -->
        <mxCell id="monitoring-container" value="" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E1F5FE;strokeColor=#0288D1;strokeWidth=2;" vertex="1" parent="1">
          <mxGeometry x="80" y="840" width="1240" height="120" as="geometry"/>
        </mxCell>
        <mxCell id="monitoring-label" value="SECURITY MONITORING &amp; COMPLIANCE" style="text;html=1;strokeColor=none;fillColor=#0288D1;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=1;fontSize=14;fontStyle=1;fontColor=#ffffff;" vertex="1" parent="1">
          <mxGeometry x="580" y="850" width="280" height="30" as="geometry"/>
        </mxCell>
        
        <!-- Monitoring Components -->
        <mxCell id="logging-security" value="📊 Security Logging&#xa;Audit &amp; Compliance&#xa;• Access logs&#xa;• Authentication events&#xa;• Error tracking&#xa;• Performance metrics&#xa;• Security incidents&#xa;• Compliance reporting" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#B3E5FC;strokeColor=#0277BD;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="120" y="890" width="180" height="60" as="geometry"/>
        </mxCell>
        
        <mxCell id="alerting" value="🚨 Security Alerting&#xa;Incident Response&#xa;• Real-time monitoring&#xa;• Anomaly detection&#xa;• Threshold alerts&#xa;• Escalation procedures&#xa;• Automated responses&#xa;• Notification systems" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#B3E5FC;strokeColor=#0277BD;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="320" y="890" width="180" height="60" as="geometry"/>
        </mxCell>
        
        <mxCell id="compliance" value="📋 Compliance Standards&#xa;Security Frameworks&#xa;• OWASP guidelines&#xa;• Security best practices&#xa;• Industry standards&#xa;• Audit requirements&#xa;• Documentation&#xa;• Regular assessments" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#B3E5FC;strokeColor=#0277BD;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="520" y="890" width="180" height="60" as="geometry"/>
        </mxCell>
        
        <mxCell id="backup-recovery" value="💾 Backup &amp; Recovery&#xa;Business Continuity&#xa;• Data backup strategies&#xa;• Disaster recovery plans&#xa;• Point-in-time recovery&#xa;• Cross-region replication&#xa;• Recovery testing&#xa;• RTO/RPO objectives" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#B3E5FC;strokeColor=#0277BD;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="720" y="890" width="180" height="60" as="geometry"/>
        </mxCell>
        
        <mxCell id="incident-response" value="🚨 Incident Response&#xa;Security Operations&#xa;• Incident classification&#xa;• Response procedures&#xa;• Forensics capabilities&#xa;• Recovery protocols&#xa;• Lessons learned&#xa;• Team coordination" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#B3E5FC;strokeColor=#0277BD;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="920" y="890" width="180" height="60" as="geometry"/>
        </mxCell>
        
        <mxCell id="security-training" value="📚 Security Training&#xa;Team Awareness&#xa;• Security awareness&#xa;• Best practice training&#xa;• Threat landscape updates&#xa;• Tool training&#xa;• Incident simulations&#xa;• Continuous education" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#B3E5FC;strokeColor=#0277BD;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="1120" y="890" width="180" height="60" as="geometry"/>
        </mxCell>
        
        <!-- Security Flow Connections -->
        <mxCell id="threat-to-armor" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeWidth=2;strokeColor=#F44336;" edge="1" parent="1" source="ddos-attacks" target="cloud-armor">
          <mxGeometry relative="1" as="geometry">
            <Array as="points">
              <mxPoint x="180" y="190" />
              <mxPoint x="210" y="190" />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id="threat-armor-label" value="mitigated by" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];fontSize=9;fontStyle=1;fontColor=#F44336;" vertex="1" connectable="0" parent="threat-to-armor">
          <mxGeometry x="-0.1" y="1" relative="1" as="geometry"/>
        </mxCell>
        
        <mxCell id="malicious-to-helmet" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeWidth=2;strokeColor=#F44336;" edge="1" parent="1" source="malicious-requests" target="helmet-security">
          <mxGeometry relative="1" as="geometry">
            <Array as="points">
              <mxPoint x="320" y="190" />
              <mxPoint x="220" y="190" />
              <mxPoint x="220" y="390" />
              <mxPoint x="220" y="390" />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id="malicious-helmet-label" value="blocked by" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];fontSize=9;fontStyle=1;fontColor=#F44336;" vertex="1" connectable="0" parent="malicious-to-helmet">
          <mxGeometry x="-0.1" y="1" relative="1" as="geometry"/>
        </mxCell>
        
        <mxCell id="gcp-to-app" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeWidth=2;strokeColor=#4CAF50;" edge="1" parent="1" source="iam-security" target="helmet-security">
          <mxGeometry relative="1" as="geometry">
            <Array as="points">
              <mxPoint x="810" y="350" />
              <mxPoint x="220" y="350" />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id="gcp-app-label" value="protects" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];fontSize=9;fontStyle=1;fontColor=#4CAF50;" vertex="1" connectable="0" parent="gcp-to-app">
          <mxGeometry x="-0.1" y="1" relative="1" as="geometry"/>
        </mxCell>
        
        <mxCell id="app-to-container" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeWidth=2;strokeColor=#1976D2;" edge="1" parent="1" source="input-validation" target="base-image-security">
          <mxGeometry relative="1" as="geometry">
            <Array as="points">
              <mxPoint x="440" y="510" />
              <mxPoint x="220" y="510" />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id="app-container-label" value="secured by" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];fontSize=9;fontStyle=1;fontColor=#1976D2;" vertex="1" connectable="0" parent="app-to-container">
          <mxGeometry x="-0.1" y="1" relative="1" as="geometry"/>
        </mxCell>
        
        <mxCell id="container-to-cicd" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeWidth=2;strokeColor=#FF9800;" edge="1" parent="1" source="image-scanning" target="npm-audit">
          <mxGeometry relative="1" as="geometry">
            <Array as="points">
              <mxPoint x="880" y="670" />
              <mxPoint x="440" y="670" />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id="container-cicd-label" value="validated by" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];fontSize=9;fontStyle=1;fontColor=#FF9800;" vertex="1" connectable="0" parent="container-to-cicd">
          <mxGeometry x="-0.1" y="1" relative="1" as="geometry"/>
        </mxCell>
        
        <mxCell id="cicd-to-monitoring" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeWidth=2;strokeColor=#9C27B0;" edge="1" parent="1" source="deployment-security" target="logging-security">
          <mxGeometry relative="1" as="geometry">
            <Array as="points">
              <mxPoint x="1100" y="830" />
              <mxPoint x="210" y="830" />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id="cicd-monitoring-label" value="monitored by" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];fontSize=9;fontStyle=1;fontColor=#9C27B0;" vertex="1" connectable="0" parent="cicd-to-monitoring">
          <mxGeometry x="-0.1" y="1" relative="1" as="geometry"/>
        </mxCell>
        
        <!-- Summary -->
        <mxCell id="summary-container" value="" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFF9C4;strokeColor=#F9A825;strokeWidth=2;" vertex="1" parent="1">
          <mxGeometry x="80" y="980" width="1240" height="80" as="geometry"/>
        </mxCell>
        <mxCell id="summary-text" value="📋 SECURITY ARCHITECTURE OVERVIEW: Defense-in-depth security implementation with multi-layered protection&#xa;• Google Cloud Platform native security services • Application-level security with Helmet.js and input validation • Container security with Alpine Linux hardening&#xa;• CI/CD pipeline security with automated scanning • Monitoring and compliance • Incident response capabilities&#xa;• Security-focused development practices with automated quality gates and vulnerability management" style="text;html=1;strokeColor=none;fillColor=#FFF9C4;align=left;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=11;fontStyle=0;fontColor=#F57F17;" vertex="1" parent="1">
          <mxGeometry x="100" y="990" width="1200" height="60" as="geometry"/>
        </mxCell>
        
      </root>
    </mxGraphModel>
  </diagram>
</mxfile>