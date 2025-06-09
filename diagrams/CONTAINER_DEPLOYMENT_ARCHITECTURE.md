<?xml version="1.0" encoding="UTF-8"?>
<mxfile host="app.diagrams.net" modified="2025-06-08T00:00:00.000Z" agent="draw.io Desktop" etag="version" version="24.0.0" type="device">
  <diagram name="Container &amp; Deployment Architecture" id="container-deployment-architecture">
    <mxGraphModel dx="2074" dy="1129" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="1400" pageHeight="1100" background="#ffffff">
      <root>
        <mxCell id="0"/>
        <mxCell id="1" parent="0"/>
        
        <!-- Title -->
        <mxCell id="title" value="Container &amp; Deployment Architecture - Docker to Google Cloud Run" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=20;fontStyle=1;fontColor=#2E3440;" vertex="1" parent="1">
          <mxGeometry x="300" y="20" width="800" height="40" as="geometry"/>
        </mxCell>
        
        <!-- Source Code Layer -->
        <mxCell id="source-container" value="" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E8F5E8;strokeColor=#4CAF50;strokeWidth=2;" vertex="1" parent="1">
          <mxGeometry x="80" y="80" width="1240" height="120" as="geometry"/>
        </mxCell>
        <mxCell id="source-label" value="APPLICATION SOURCE CODE" style="text;html=1;strokeColor=none;fillColor=#4CAF50;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=1;fontSize=14;fontStyle=1;fontColor=#ffffff;" vertex="1" parent="1">
          <mxGeometry x="620" y="90" width="200" height="30" as="geometry"/>
        </mxCell>
        
        <mxCell id="express-app" value="⚡ Express.js Application&#xa;• src/index.js (main entry)&#xa;• src/routes/api.js (2 endpoints)&#xa;• src/config/environment.js&#xa;• src/middleware/timeout.js&#xa;• 340 lines total code" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#C8E6C9;strokeColor=#66BB6A;fontStyle=1;fontSize=11;align=left;" vertex="1" parent="1">
          <mxGeometry x="120" y="130" width="200" height="60" as="geometry"/>
        </mxCell>
        
        <mxCell id="package-json" value="📦 Dependencies&#xa;• 4 production deps&#xa;• 5 development deps&#xa;• Jest test configuration&#xa;• NPM scripts for all tasks" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#C8E6C9;strokeColor=#66BB6A;fontStyle=1;fontSize=11;align=left;" vertex="1" parent="1">
          <mxGeometry x="340" y="130" width="200" height="60" as="geometry"/>
        </mxCell>
        
        <mxCell id="test-suite" value="🧪 Test Suite&#xa;• __tests__/app.test.js&#xa;• Jest + Supertest&#xa;• API endpoint coverage&#xa;• Middleware testing" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#C8E6C9;strokeColor=#66BB6A;fontStyle=1;fontSize=11;align=left;" vertex="1" parent="1">
          <mxGeometry x="560" y="130" width="200" height="60" as="geometry"/>
        </mxCell>
        
        <mxCell id="docker-configs" value="🐳 Docker Configuration&#xa;• Dockerfile (single-stage)&#xa;• docker-compose.yml&#xa;• 3 profiles (dev/test/prod)&#xa;• Health check configuration" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#C8E6C9;strokeColor=#66BB6A;fontStyle=1;fontSize=11;align=left;" vertex="1" parent="1">
          <mxGeometry x="780" y="130" width="200" height="60" as="geometry"/>
        </mxCell>
        
        <mxCell id="ci-workflows" value="🔄 CI/CD Workflows&#xa;• 6 GitHub Actions workflows&#xa;• 2 custom actions&#xa;• Automated build &amp; deploy&#xa;• Multi-environment support" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#C8E6C9;strokeColor=#66BB6A;fontStyle=1;fontSize=11;align=left;" vertex="1" parent="1">
          <mxGeometry x="1000" y="130" width="200" height="60" as="geometry"/>
        </mxCell>
        
        <!-- Docker Build Process -->
        <mxCell id="docker-build-container" value="" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E3F2FD;strokeColor=#1976D2;strokeWidth=2;" vertex="1" parent="1">
          <mxGeometry x="80" y="220" width="1240" height="180" as="geometry"/>
        </mxCell>
        <mxCell id="docker-build-label" value="DOCKER CONTAINERIZATION PROCESS" style="text;html=1;strokeColor=none;fillColor=#1976D2;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=1;fontSize=14;fontStyle=1;fontColor=#ffffff;" vertex="1" parent="1">
          <mxGeometry x="600" y="230" width="240" height="30" as="geometry"/>
        </mxCell>
        
        <!-- Dockerfile Steps -->
        <mxCell id="base-image" value="🏔️ Base Image&#xa;FROM node:20-alpine3.21&#xa;• Lightweight Alpine Linux&#xa;• Node.js 20 runtime&#xa;• Security-focused base" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#BBDEFB;strokeColor=#1565C0;fontStyle=1;fontSize=11;align=left;" vertex="1" parent="1">
          <mxGeometry x="120" y="270" width="180" height="60" as="geometry"/>
        </mxCell>
        
        <mxCell id="build-args" value="🔧 Build Arguments&#xa;ARG NODE_ENV=development&#xa;ARG APP_VERSION=1.0.0&#xa;ARG BUILD_NUMBER=local&#xa;• Environment configuration&#xa;• Version metadata" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#BBDEFB;strokeColor=#1565C0;fontStyle=1;fontSize=11;align=left;" vertex="1" parent="1">
          <mxGeometry x="320" y="270" width="180" height="60" as="geometry"/>
        </mxCell>
        
        <mxCell id="workdir-copy" value="📁 Workspace Setup&#xa;WORKDIR /app&#xa;COPY package*.json ./&#xa;• Working directory creation&#xa;• Dependency manifest copy&#xa;• Layer optimization" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#BBDEFB;strokeColor=#1565C0;fontStyle=1;fontSize=11;align=left;" vertex="1" parent="1">
          <mxGeometry x="520" y="270" width="180" height="60" as="geometry"/>
        </mxCell>
        
        <mxCell id="npm-install" value="📦 Dependency Installation&#xa;RUN npm install --production&#xa;• Production dependencies only&#xa;• Clean install process&#xa;• Node modules optimization&#xa;• Security audit passing" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#BBDEFB;strokeColor=#1565C0;fontStyle=1;fontSize=11;align=left;" vertex="1" parent="1">
          <mxGeometry x="720" y="270" width="180" height="60" as="geometry"/>
        </mxCell>
        
        <mxCell id="app-copy" value="📄 Application Copy&#xa;COPY . .&#xa;• Source code transfer&#xa;• Configuration files&#xa;• Directory structure&#xa;• File permissions" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#BBDEFB;strokeColor=#1565C0;fontStyle=1;fontSize=11;align=left;" vertex="1" parent="1">
          <mxGeometry x="920" y="270" width="180" height="60" as="geometry"/>
        </mxCell>
        
        <mxCell id="metadata-health" value="🏷️ Metadata &amp; Health&#xa;LABEL maintainer, version&#xa;EXPOSE 3000&#xa;HEALTHCHECK --interval=30s&#xa;CMD [&amp;quot;npm&amp;quot;, &amp;quot;start&amp;quot;]&#xa;• Container metadata&#xa;• Health monitoring" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#BBDEFB;strokeColor=#1565C0;fontStyle=1;fontSize=11;align=left;" vertex="1" parent="1">
          <mxGeometry x="1120" y="270" width="180" height="60" as="geometry"/>
        </mxCell>
        
        <!-- Multi-Environment Support -->
        <mxCell id="multi-env-container" value="" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFF3E0;strokeColor=#FF9800;strokeWidth=2;" vertex="1" parent="1">
          <mxGeometry x="80" y="340" width="1240" height="60" as="geometry"/>
        </mxCell>
        
        <mxCell id="docker-compose-dev" value="🟢 Development Profile&#xa;docker-compose up&#xa;Volume mounting enabled" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFE0B2;strokeColor=#FB8C00;fontStyle=1;fontSize=10;" vertex="1" parent="1">
          <mxGeometry x="200" y="350" width="180" height="40" as="geometry"/>
        </mxCell>
        
        <mxCell id="docker-compose-test" value="🟡 Testing Profile&#xa;docker-compose --profile test up&#xa;Isolated test environment" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFE0B2;strokeColor=#FB8C00;fontStyle=1;fontSize=10;" vertex="1" parent="1">
          <mxGeometry x="430" y="350" width="180" height="40" as="geometry"/>
        </mxCell>
        
        <mxCell id="docker-compose-prod" value="🔴 Production Profile&#xa;docker-compose --profile prod up&#xa;No volumes, optimized" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFE0B2;strokeColor=#FB8C00;fontStyle=1;fontSize=10;" vertex="1" parent="1">
          <mxGeometry x="660" y="350" width="180" height="40" as="geometry"/>
        </mxCell>
        
        <mxCell id="docker-health-check" value="💚 Health Check&#xa;HTTP GET /health&#xa;30s interval monitoring" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFE0B2;strokeColor=#FB8C00;fontStyle=1;fontSize=10;" vertex="1" parent="1">
          <mxGeometry x="890" y="350" width="180" height="40" as="geometry"/>
        </mxCell>
        
        <!-- Google Cloud Platform -->
        <mxCell id="gcp-container" value="" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#F3E5F5;strokeColor=#9C27B0;strokeWidth=2;" vertex="1" parent="1">
          <mxGeometry x="80" y="420" width="1240" height="220" as="geometry"/>
        </mxCell>
        <mxCell id="gcp-label" value="GOOGLE CLOUD PLATFORM DEPLOYMENT" style="text;html=1;strokeColor=none;fillColor=#9C27B0;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=1;fontSize=14;fontStyle=1;fontColor=#ffffff;" vertex="1" parent="1">
          <mxGeometry x="580" y="430" width="280" height="30" as="geometry"/>
        </mxCell>
        
        <!-- Artifact Registry -->
        <mxCell id="artifact-registry" value="🗃️ Artifact Registry&#xa;• us-central1 region&#xa;• Docker format repository&#xa;• Image storage &amp; versioning&#xa;• SHA-based tagging&#xa;• Multi-environment images&#xa;• Automated cleanup policies" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E1BEE7;strokeColor=#8E24AA;fontStyle=1;fontSize=11;align=left;" vertex="1" parent="1">
          <mxGeometry x="120" y="470" width="200" height="100" as="geometry"/>
        </mxCell>
        
        <!-- Cloud Run Services -->
        <mxCell id="cloud-run-dev" value="☁️ Cloud Run - Development&#xa;• Service: simple-webapp-dev&#xa;• Memory: 512Mi, CPU: 1000m&#xa;• Min instances: 0, Max: 10&#xa;• Timeout: 300 seconds&#xa;• Auto-deploy on main push&#xa;• Development configuration" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E1BEE7;strokeColor=#8E24AA;fontStyle=1;fontSize=11;align=left;" vertex="1" parent="1">
          <mxGeometry x="340" y="470" width="200" height="100" as="geometry"/>
        </mxCell>
        
        <mxCell id="cloud-run-test" value="☁️ Cloud Run - Testing&#xa;• Service: simple-webapp-test&#xa;• Memory: 512Mi, CPU: 1000m&#xa;• Min instances: 0, Max: 10&#xa;• Timeout: 300 seconds&#xa;• Manual deployment only&#xa;• Testing configuration" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E1BEE7;strokeColor=#8E24AA;fontStyle=1;fontSize=11;align=left;" vertex="1" parent="1">
          <mxGeometry x="560" y="470" width="200" height="100" as="geometry"/>
        </mxCell>
        
        <mxCell id="cloud-run-prod" value="☁️ Cloud Run - Production&#xa;• Service: simple-webapp-prod&#xa;• Memory: 512Mi, CPU: 1000m&#xa;• Min instances: 0, Max: 10&#xa;• Timeout: 300 seconds&#xa;• Manual deployment only&#xa;• Production configuration" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E1BEE7;strokeColor=#8E24AA;fontStyle=1;fontSize=11;align=left;" vertex="1" parent="1">
          <mxGeometry x="780" y="470" width="200" height="100" as="geometry"/>
        </mxCell>
        
        <mxCell id="cloud-storage" value="🗜️ Cloud Storage&#xa;• Test artifacts storage&#xa;• Deployment metadata&#xa;• Build logs &amp; reports&#xa;• Custom action data&#xa;• Automated cleanup&#xa;• Free tier compliance" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E1BEE7;strokeColor=#8E24AA;fontStyle=1;fontSize=11;align=left;" vertex="1" parent="1">
          <mxGeometry x="1000" y="470" width="200" height="100" as="geometry"/>
        </mxCell>
        
        <mxCell id="iam-security" value="🔐 IAM &amp; Security&#xa;• Service account authentication&#xa;• GitHub secrets management&#xa;• Role-based access control&#xa;• API key protection&#xa;• Network security groups&#xa;• Resource isolation" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E1BEE7;strokeColor=#8E24AA;fontStyle=1;fontSize=11;align=left;" vertex="1" parent="1">
          <mxGeometry x="340" y="590" width="200" height="40" as="geometry"/>
        </mxCell>
        
        <mxCell id="monitoring-logs" value="📊 Monitoring &amp; Logs&#xa;• Cloud Run request logs&#xa;• Application performance&#xa;• Health check monitoring&#xa;• Error tracking&#xa;• Resource utilization&#xa;• Cost monitoring" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E1BEE7;strokeColor=#8E24AA;fontStyle=1;fontSize=11;align=left;" vertex="1" parent="1">
          <mxGeometry x="560" y="590" width="200" height="40" as="geometry"/>
        </mxCell>
        
        <mxCell id="networking" value="🌐 Networking&#xa;• HTTPS endpoints&#xa;• Automatic SSL certificates&#xa;• Regional deployment&#xa;• Load balancing&#xa;• DDoS protection&#xa;• CDN integration ready" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E1BEE7;strokeColor=#8E24AA;fontStyle=1;fontSize=11;align=left;" vertex="1" parent="1">
          <mxGeometry x="780" y="590" width="200" height="40" as="geometry"/>
        </mxCell>
        
        <!-- Deployment Process -->
        <mxCell id="deployment-process-container" value="" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFEBEE;strokeColor=#F44336;strokeWidth=2;" vertex="1" parent="1">
          <mxGeometry x="80" y="660" width="1240" height="140" as="geometry"/>
        </mxCell>
        <mxCell id="deployment-process-label" value="AUTOMATED DEPLOYMENT PROCESS" style="text;html=1;strokeColor=none;fillColor=#F44336;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=1;fontSize=14;fontStyle=1;fontColor=#ffffff;" vertex="1" parent="1">
          <mxGeometry x="580" y="670" width="280" height="30" as="geometry"/>
        </mxCell>
        
        <mxCell id="step-1" value="1️⃣ Source Code&#xa;GitHub repository&#xa;Trigger event" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFCDD2;strokeColor=#E57373;fontStyle=1;fontSize=10;align=center;" vertex="1" parent="1">
          <mxGeometry x="120" y="710" width="120" height="60" as="geometry"/>
        </mxCell>
        
        <mxCell id="step-2" value="2️⃣ CI Pipeline&#xa;Test, lint, build&#xa;Quality gates" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFCDD2;strokeColor=#E57373;fontStyle=1;fontSize=10;align=center;" vertex="1" parent="1">
          <mxGeometry x="260" y="710" width="120" height="60" as="geometry"/>
        </mxCell>
        
        <mxCell id="step-3" value="3️⃣ Docker Build&#xa;Image creation&#xa;Multi-stage process" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFCDD2;strokeColor=#E57373;fontStyle=1;fontSize=10;align=center;" vertex="1" parent="1">
          <mxGeometry x="400" y="710" width="120" height="60" as="geometry"/>
        </mxCell>
        
        <mxCell id="step-4" value="4️⃣ Registry Push&#xa;Artifact Registry&#xa;Image versioning" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFCDD2;strokeColor=#E57373;fontStyle=1;fontSize=10;align=center;" vertex="1" parent="1">
          <mxGeometry x="540" y="710" width="120" height="60" as="geometry"/>
        </mxCell>
        
        <mxCell id="step-5" value="5️⃣ Cloud Run Deploy&#xa;Service update&#xa;Traffic routing" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFCDD2;strokeColor=#E57373;fontStyle=1;fontSize=10;align=center;" vertex="1" parent="1">
          <mxGeometry x="680" y="710" width="120" height="60" as="geometry"/>
        </mxCell>
        
        <mxCell id="step-6" value="6️⃣ Health Validation&#xa;Endpoint testing&#xa;Service verification" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFCDD2;strokeColor=#E57373;fontStyle=1;fontSize=10;align=center;" vertex="1" parent="1">
          <mxGeometry x="820" y="710" width="120" height="60" as="geometry"/>
        </mxCell>
        
        <mxCell id="step-7" value="7️⃣ Notification&#xa;Status updates&#xa;Deployment info" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFCDD2;strokeColor=#E57373;fontStyle=1;fontSize=10;align=center;" vertex="1" parent="1">
          <mxGeometry x="960" y="710" width="120" height="60" as="geometry"/>
        </mxCell>
        
        <mxCell id="rollback-strategy" value="🔄 Rollback Strategy&#xa;Previous revision&#xa;Instant recovery" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E8EAF6;strokeColor=#3F51B5;fontStyle=1;fontSize=10;align=center;" vertex="1" parent="1">
          <mxGeometry x="1100" y="710" width="120" height="60" as="geometry"/>
        </mxCell>
        
        <!-- Resource Specifications -->
        <mxCell id="resource-specs-container" value="" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E1F5FE;strokeColor=#0288D1;strokeWidth=2;" vertex="1" parent="1">
          <mxGeometry x="80" y="820" width="1240" height="120" as="geometry"/>
        </mxCell>
        <mxCell id="resource-specs-label" value="CLOUD RUN RESOURCE SPECIFICATIONS" style="text;html=1;strokeColor=none;fillColor=#0288D1;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=1;fontSize=14;fontStyle=1;fontColor=#ffffff;" vertex="1" parent="1">
          <mxGeometry x="580" y="830" width="280" height="30" as="geometry"/>
        </mxCell>
        
        <mxCell id="compute-resources" value="💻 Compute Resources&#xa;• Memory: 512 MiB (max allowed)&#xa;• CPU: 1000 millicores (1 vCPU)&#xa;• Request timeout: 300 seconds&#xa;• Cold start optimization&#xa;• Automatic scaling enabled" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#B3E5FC;strokeColor=#0277BD;fontStyle=0;fontSize=11;align=left;" vertex="1" parent="1">
          <mxGeometry x="120" y="870" width="240" height="60" as="geometry"/>
        </mxCell>
        
        <mxCell id="scaling-config" value="📈 Scaling Configuration&#xa;• Minimum instances: 0&#xa;• Maximum instances: 10&#xa;• Concurrent requests: 1000&#xa;• Scale to zero enabled&#xa;• Traffic-based scaling" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#B3E5FC;strokeColor=#0277BD;fontStyle=0;fontSize=11;align=left;" vertex="1" parent="1">
          <mxGeometry x="380" y="870" width="240" height="60" as="geometry"/>
        </mxCell>
        
        <mxCell id="env-variables" value="⚙️ Environment Variables&#xa;• NODE_ENV (environment-specific)&#xa;• PORT=3000 (standard)&#xa;• GCP_PROJECT_ID (deployment)&#xa;• Custom app configurations&#xa;• Secrets from Secret Manager" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#B3E5FC;strokeColor=#0277BD;fontStyle=0;fontSize=11;align=left;" vertex="1" parent="1">
          <mxGeometry x="640" y="870" width="240" height="60" as="geometry"/>
        </mxCell>
        
        <mxCell id="free-tier" value="💰 Free Tier Compliance&#xa;• 2M requests/month (well within)&#xa;• 400,000 GB-seconds/month&#xa;• Always-free CPU and memory&#xa;• No egress charges (regional)&#xa;• Cost-optimized configuration" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#B3E5FC;strokeColor=#0277BD;fontStyle=0;fontSize=11;align=left;" vertex="1" parent="1">
          <mxGeometry x="900" y="870" width="240" height="60" as="geometry"/>
        </mxCell>
        
        <!-- Data Flow Connections -->
        <mxCell id="source-to-docker" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeWidth=2;strokeColor=#4CAF50;" edge="1" parent="1" source="express-app" target="base-image">
          <mxGeometry relative="1" as="geometry">
            <Array as="points">
              <mxPoint x="220" y="210" />
              <mxPoint x="210" y="210" />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id="source-docker-label" value="containerized" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];fontSize=10;fontStyle=1;fontColor=#4CAF50;" vertex="1" connectable="0" parent="source-to-docker">
          <mxGeometry x="-0.1" y="1" relative="1" as="geometry"/>
        </mxCell>
        
        <mxCell id="docker-flow-1" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeWidth=2;strokeColor=#1976D2;" edge="1" parent="1" source="base-image" target="build-args">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>
        
        <mxCell id="docker-flow-2" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeWidth=2;strokeColor=#1976D2;" edge="1" parent="1" source="build-args" target="workdir-copy">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>
        
        <mxCell id="docker-flow-3" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeWidth=2;strokeColor=#1976D2;" edge="1" parent="1" source="workdir-copy" target="npm-install">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>
        
        <mxCell id="docker-flow-4" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeWidth=2;strokeColor=#1976D2;" edge="1" parent="1" source="npm-install" target="app-copy">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>
        
        <mxCell id="docker-flow-5" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeWidth=2;strokeColor=#1976D2;" edge="1" parent="1" source="app-copy" target="metadata-health">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>
        
        <mxCell id="docker-to-registry" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeWidth=3;strokeColor=#9C27B0;" edge="1" parent="1" source="metadata-health" target="artifact-registry">
          <mxGeometry relative="1" as="geometry">
            <Array as="points">
              <mxPoint x="1210" y="410" />
              <mxPoint x="220" y="410" />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id="docker-registry-label" value="pushed to" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];fontSize=10;fontStyle=1;fontColor=#9C27B0;" vertex="1" connectable="0" parent="docker-to-registry">
          <mxGeometry x="-0.1" y="1" relative="1" as="geometry"/>
        </mxCell>
        
        <mxCell id="registry-to-dev" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeWidth=2;strokeColor=#9C27B0;" edge="1" parent="1" source="artifact-registry" target="cloud-run-dev">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>
        <mxCell id="registry-dev-label" value="auto-deploy" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];fontSize=10;fontStyle=1;fontColor=#9C27B0;" vertex="1" connectable="0" parent="registry-to-dev">
          <mxGeometry x="-0.1" y="1" relative="1" as="geometry"/>
        </mxCell>
        
        <mxCell id="registry-to-test" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeWidth=2;strokeColor=#9C27B0;dashed=1;" edge="1" parent="1" source="artifact-registry" target="cloud-run-test">
          <mxGeometry relative="1" as="geometry">
            <Array as="points">
              <mxPoint x="220" y="450" />
              <mxPoint x="660" y="450" />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id="registry-test-label" value="manual deploy" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];fontSize=10;fontStyle=1;fontColor=#9C27B0;" vertex="1" connectable="0" parent="registry-to-test">
          <mxGeometry x="-0.1" y="1" relative="1" as="geometry"/>
        </mxCell>
        
        <mxCell id="registry-to-prod" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeWidth=2;strokeColor=#9C27B0;dashed=1;" edge="1" parent="1" source="artifact-registry" target="cloud-run-prod">
          <mxGeometry relative="1" as="geometry">
            <Array as="points">
              <mxPoint x="220" y="450" />
              <mxPoint x="880" y="450" />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id="registry-prod-label" value="manual deploy" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];fontSize=10;fontStyle=1;fontColor=#9C27B0;" vertex="1" connectable="0" parent="registry-to-prod">
          <mxGeometry x="-0.1" y="1" relative="1" as="geometry"/>
        </mxCell>
        
        <!-- Deployment Process Flow -->
        <mxCell id="deployment-flow-1" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeWidth=2;strokeColor=#F44336;" edge="1" parent="1" source="step-1" target="step-2">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>
        
        <mxCell id="deployment-flow-2" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeWidth=2;strokeColor=#F44336;" edge="1" parent="1" source="step-2" target="step-3">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>
        
        <mxCell id="deployment-flow-3" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeWidth=2;strokeColor=#F44336;" edge="1" parent="1" source="step-3" target="step-4">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>
        
        <mxCell id="deployment-flow-4" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeWidth=2;strokeColor=#F44336;" edge="1" parent="1" source="step-4" target="step-5">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>
        
        <mxCell id="deployment-flow-5" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeWidth=2;strokeColor=#F44336;" edge="1" parent="1" source="step-5" target="step-6">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>
        
        <mxCell id="deployment-flow-6" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeWidth=2;strokeColor=#F44336;" edge="1" parent="1" source="step-6" target="step-7">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>
        
        <!-- Summary -->
        <mxCell id="summary-container" value="" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFF9C4;strokeColor=#F9A825;strokeWidth=2;" vertex="1" parent="1">
          <mxGeometry x="80" y="960" width="1240" height="80" as="geometry"/>
        </mxCell>
        <mxCell id="summary-text" value="📋 CONTAINER &amp; DEPLOYMENT OVERVIEW: Containerization with Docker build and multi-environment Google Cloud Run deployment&#xa;• Node.js 20 Alpine base image • Container build optimization • 3-environment deployment strategy • Automated CI/CD pipeline integration&#xa;• Health monitoring and scaling • Free tier compliant resource allocation • Security and monitoring" style="text;html=1;strokeColor=none;fillColor=#FFF9C4;align=left;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=11;fontStyle=0;fontColor=#F57F17;" vertex="1" parent="1">
          <mxGeometry x="100" y="970" width="1200" height="60" as="geometry"/>
        </mxCell>
        
      </root>
    </mxGraphModel>
  </diagram>
</mxfile>