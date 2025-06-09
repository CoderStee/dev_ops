<?xml version="1.0" encoding="UTF-8"?>
<mxfile host="app.diagrams.net" modified="2025-06-08T00:00:00.000Z" agent="draw.io Desktop" etag="version" version="24.0.0" type="device">
  <diagram name="Express.js Application Architecture" id="express-application-architecture">
    <mxGraphModel dx="2074" dy="1129" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="1400" pageHeight="1100" background="#ffffff">
      <root>
        <mxCell id="0"/>
        <mxCell id="1" parent="0"/>
        
        <!-- Title -->
        <mxCell id="title" value="Express.js Application Architecture - Internal Structure" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=20;fontStyle=1;fontColor=#2E3440;" vertex="1" parent="1">
          <mxGeometry x="300" y="20" width="800" height="40" as="geometry"/>
        </mxCell>
        
        <!-- File Structure Overview -->
        <mxCell id="structure-container" value="" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E3F2FD;strokeColor=#1976D2;strokeWidth=2;" vertex="1" parent="1">
          <mxGeometry x="80" y="80" width="350" height="320" as="geometry"/>
        </mxCell>
        <mxCell id="structure-label" value="APPLICATION FILE STRUCTURE" style="text;html=1;strokeColor=none;fillColor=#1976D2;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=1;fontSize=14;fontStyle=1;fontColor=#ffffff;" vertex="1" parent="1">
          <mxGeometry x="155" y="90" width="200" height="30" as="geometry"/>
        </mxCell>
        
        <mxCell id="file-tree" value="simple-webapp/&#xa;• package.json (46 lines)&#xa;• Dockerfile (33 lines)&#xa;• docker-compose.yml (62 lines)&#xa;• src/ (340 lines total)&#xa;  - index.js (135 lines)&#xa;  - config/environment.js (35 lines)&#xa;  - routes/api.js (34 lines)&#xa;  - middleware/timeout.js (29 lines)&#xa;  - __tests__/app.test.js (107 lines)&#xa;• .github/&#xa;  - workflows/ (6 files)&#xa;  - actions/ (2 custom actions)&#xa;&#xa;Key Features:&#xa;• 2 API endpoints (/, /health)&#xa;• Express middleware stack&#xa;• Environment configuration&#xa;• Comprehensive test suite&#xa;• Docker containerization&#xa;• CI/CD automation" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#BBDEFB;strokeColor=#1565C0;fontStyle=0;fontSize=10;align=left;fontFamily=Courier New;" vertex="1" parent="1">
          <mxGeometry x="100" y="130" width="310" height="260" as="geometry"/>
        </mxCell>
        
        <!-- Main Application Flow -->
        <mxCell id="app-flow-container" value="" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E8F5E8;strokeColor=#4CAF50;strokeWidth=2;" vertex="1" parent="1">
          <mxGeometry x="450" y="80" width="870" height="320" as="geometry"/>
        </mxCell>
        <mxCell id="app-flow-label" value="APPLICATION EXECUTION FLOW" style="text;html=1;strokeColor=none;fillColor=#4CAF50;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=1;fontSize=14;fontStyle=1;fontColor=#ffffff;" vertex="1" parent="1">
          <mxGeometry x="785" y="90" width="200" height="30" as="geometry"/>
        </mxCell>
        
        <!-- Entry Point -->
        <mxCell id="index-module" value="src/index.js&#xa;MAIN ENTRY POINT&#xa;══════════════════&#xa;&#xa;• Load environment vars&#xa;• Import dependencies&#xa;• Validate config&#xa;• Configure middleware&#xa;• Setup routes&#xa;• Start HTTP server&#xa;• Graceful shutdown" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#C8E6C9;strokeColor=#66BB6A;fontStyle=1;fontSize=11;align=left;" vertex="1" parent="1">
          <mxGeometry x="470" y="130" width="240" height="120" as="geometry"/>
        </mxCell>
        
        <!-- Configuration Module -->
        <mxCell id="config-module" value="config/environment.js&#xa;CONFIGURATION&#xa;═══════════════&#xa;&#xa;• validateEnvironment()&#xa;• getPort() validation&#xa;• NODE_ENV detection&#xa;• isProduction flag&#xa;• isDevelopment flag&#xa;• Config export" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFF9C4;strokeColor=#F9A825;fontStyle=1;fontSize=11;align=left;" vertex="1" parent="1">
          <mxGeometry x="730" y="130" width="220" height="120" as="geometry"/>
        </mxCell>
        
        <!-- Routes Module -->
        <mxCell id="routes-module" value="routes/api.js&#xa;API ROUTES&#xa;═════════════&#xa;&#xa;• Express Router&#xa;• GET / (app info)&#xa;• GET /health (status)&#xa;• JSON responses&#xa;• Environment aware&#xa;• Timestamps" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E1F5FE;strokeColor=#0288D1;fontStyle=1;fontSize=11;align=left;" vertex="1" parent="1">
          <mxGeometry x="970" y="130" width="220" height="120" as="geometry"/>
        </mxCell>
        
        <!-- Middleware Module -->
        <mxCell id="middleware-module" value="middleware/timeout.js&#xa;TIMEOUT MIDDLEWARE&#xa;═════════════════&#xa;&#xa;• Factory function&#xa;• Configurable timeout&#xa;• HTTP 408 response&#xa;• Automatic cleanup&#xa;• Resource protection&#xa;• Express compatible" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFCDD2;strokeColor=#E57373;fontStyle=1;fontSize=11;align=left;" vertex="1" parent="1">
          <mxGeometry x="470" y="270" width="240" height="120" as="geometry"/>
        </mxCell>
        
        <!-- Testing Module -->
        <mxCell id="testing-module" value="__tests__/app.test.js&#xa;TEST SUITE&#xa;════════════&#xa;&#xa;• Jest framework&#xa;• Supertest HTTP&#xa;• API endpoint tests&#xa;• Middleware tests&#xa;• Config validation&#xa;• Test app factory" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#F3E5F5;strokeColor=#9C27B0;fontStyle=1;fontSize=11;align=left;" vertex="1" parent="1">
          <mxGeometry x="730" y="270" width="220" height="120" as="geometry"/>
        </mxCell>
        
        <!-- External Dependencies -->
        <mxCell id="deps-container" value="" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFF3E0;strokeColor=#FF9800;strokeWidth=2;" vertex="1" parent="1">
          <mxGeometry x="80" y="420" width="1240" height="140" as="geometry"/>
        </mxCell>
        <mxCell id="deps-label" value="EXTERNAL DEPENDENCIES &amp; MIDDLEWARE STACK" style="text;html=1;strokeColor=none;fillColor=#FF9800;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=1;fontSize=14;fontStyle=1;fontColor=#ffffff;" vertex="1" parent="1">
          <mxGeometry x="580" y="430" width="320" height="30" as="geometry"/>
        </mxCell>
        
        <!-- Production Dependencies -->
        <mxCell id="prod-deps-section" value="PRODUCTION DEPENDENCIES (4)" style="text;html=1;strokeColor=none;fillColor=#4CAF50;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=1;fontSize=12;fontStyle=1;fontColor=#ffffff;" vertex="1" parent="1">
          <mxGeometry x="100" y="470" width="200" height="25" as="geometry"/>
        </mxCell>
        
        <mxCell id="express-dep" value="● express@^4.18.2&#xa;Web framework core" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#C8E6C9;strokeColor=#66BB6A;fontStyle=1;fontSize=10;" vertex="1" parent="1">
          <mxGeometry x="100" y="505" width="130" height="45" as="geometry"/>
        </mxCell>
        
        <mxCell id="helmet-dep" value="● helmet@^7.1.0&#xa;Security headers" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#C8E6C9;strokeColor=#66BB6A;fontStyle=1;fontSize=10;" vertex="1" parent="1">
          <mxGeometry x="250" y="505" width="130" height="45" as="geometry"/>
        </mxCell>
        
        <mxCell id="morgan-dep" value="● morgan@^1.10.0&#xa;HTTP request logging" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#C8E6C9;strokeColor=#66BB6A;fontStyle=1;fontSize=10;" vertex="1" parent="1">
          <mxGeometry x="400" y="505" width="130" height="45" as="geometry"/>
        </mxCell>
        
        <mxCell id="dotenv-dep" value="● dotenv@^16.3.1&#xa;Environment variables" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#C8E6C9;strokeColor=#66BB6A;fontStyle=1;fontSize=10;" vertex="1" parent="1">
          <mxGeometry x="550" y="505" width="130" height="45" as="geometry"/>
        </mxCell>
        
        <!-- Development Dependencies -->
        <mxCell id="dev-deps-section" value="DEVELOPMENT DEPENDENCIES (5)" style="text;html=1;strokeColor=none;fillColor=#2196F3;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=1;fontSize=12;fontStyle=1;fontColor=#ffffff;" vertex="1" parent="1">
          <mxGeometry x="720" y="470" width="200" height="25" as="geometry"/>
        </mxCell>
        
        <mxCell id="jest-dep" value="○ jest@^29.7.0&#xa;Testing framework" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#BBDEFB;strokeColor=#1565C0;fontStyle=1;fontSize=10;" vertex="1" parent="1">
          <mxGeometry x="720" y="505" width="110" height="45" as="geometry"/>
        </mxCell>
        
        <mxCell id="supertest-dep" value="○ supertest@^6.3.3&#xa;HTTP assertion testing" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#BBDEFB;strokeColor=#1565C0;fontStyle=1;fontSize=10;" vertex="1" parent="1">
          <mxGeometry x="850" y="505" width="110" height="45" as="geometry"/>
        </mxCell>
        
        <mxCell id="eslint-dep" value="○ eslint@^8.57.0&#xa;Code linting" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#BBDEFB;strokeColor=#1565C0;fontStyle=1;fontSize=10;" vertex="1" parent="1">
          <mxGeometry x="980" y="505" width="110" height="45" as="geometry"/>
        </mxCell>
        
        <mxCell id="prettier-dep" value="○ prettier@^3.2.5&#xa;Code formatting" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#BBDEFB;strokeColor=#1565C0;fontStyle=1;fontSize=10;" vertex="1" parent="1">
          <mxGeometry x="1110" y="505" width="110" height="45" as="geometry"/>
        </mxCell>
        
        <mxCell id="nodemon-dep" value="○ nodemon@^3.0.1&#xa;Development auto-restart" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#BBDEFB;strokeColor=#1565C0;fontStyle=1;fontSize=10;" vertex="1" parent="1">
          <mxGeometry x="835" y="470" width="140" height="25" as="geometry"/>
        </mxCell>
        
        <!-- Middleware Stack -->
        <mxCell id="middleware-stack-container" value="" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFEBEE;strokeColor=#F44336;strokeWidth=2;" vertex="1" parent="1">
          <mxGeometry x="80" y="580" width="1240" height="160" as="geometry"/>
        </mxCell>
        <mxCell id="middleware-stack-label" value="EXPRESS MIDDLEWARE EXECUTION ORDER" style="text;html=1;strokeColor=none;fillColor=#F44336;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=1;fontSize=14;fontStyle=1;fontColor=#ffffff;" vertex="1" parent="1">
          <mxGeometry x="580" y="590" width="280" height="30" as="geometry"/>
        </mxCell>
        
        <!-- Middleware Chain -->
        <mxCell id="middleware-1" value="▶ helmet()&#xa;─────────&#xa;Security headers&#xa;XSS protection" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFCDD2;strokeColor=#E57373;fontStyle=1;fontSize=10;align=center;" vertex="1" parent="1">
          <mxGeometry x="120" y="630" width="120" height="60" as="geometry"/>
        </mxCell>
        
        <mxCell id="middleware-2" value="▶ morgan()&#xa;─────────&#xa;HTTP logging&#xa;Request tracking" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFCDD2;strokeColor=#E57373;fontStyle=1;fontSize=10;align=center;" vertex="1" parent="1">
          <mxGeometry x="260" y="630" width="120" height="60" as="geometry"/>
        </mxCell>
        
        <mxCell id="middleware-3" value="▶ express.json()&#xa;─────────────&#xa;Body parsing&#xa;1MB limit" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFCDD2;strokeColor=#E57373;fontStyle=1;fontSize=10;align=center;" vertex="1" parent="1">
          <mxGeometry x="400" y="630" width="120" height="60" as="geometry"/>
        </mxCell>
        
        <mxCell id="middleware-4" value="▶ timeout()&#xa;─────────&#xa;Request timeout&#xa;5 second limit" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFCDD2;strokeColor=#E57373;fontStyle=1;fontSize=10;align=center;" vertex="1" parent="1">
          <mxGeometry x="540" y="630" width="120" height="60" as="geometry"/>
        </mxCell>
        
        <mxCell id="middleware-5" value="▶ API Routes&#xa;──────────&#xa;/ endpoint&#xa;/health endpoint" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFCDD2;strokeColor=#E57373;fontStyle=1;fontSize=10;align=center;" vertex="1" parent="1">
          <mxGeometry x="680" y="630" width="120" height="60" as="geometry"/>
        </mxCell>
        
        <mxCell id="middleware-6" value="▶ 404 Handler&#xa;───────────&#xa;Unknown routes&#xa;JSON errors" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFCDD2;strokeColor=#E57373;fontStyle=1;fontSize=10;align=center;" vertex="1" parent="1">
          <mxGeometry x="820" y="630" width="120" height="60" as="geometry"/>
        </mxCell>
        
        <mxCell id="middleware-7" value="▶ Error Handlers&#xa;─────────────&#xa;Parse errors&#xa;Global catch" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFCDD2;strokeColor=#E57373;fontStyle=1;fontSize=10;align=center;" vertex="1" parent="1">
          <mxGeometry x="960" y="630" width="120" height="60" as="geometry"/>
        </mxCell>
        
        <mxCell id="graceful-shutdown" value="▷ Graceful Shutdown&#xa;────────────────&#xa;SIGTERM/SIGINT&#xa;10s timeout" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E8EAF6;strokeColor=#3F51B5;fontStyle=1;fontSize=10;align=center;" vertex="1" parent="1">
          <mxGeometry x="1100" y="630" width="120" height="60" as="geometry"/>
        </mxCell>
        
        <!-- Runtime Behavior -->
        <mxCell id="runtime-container" value="" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E1F5FE;strokeColor=#0288D1;strokeWidth=2;" vertex="1" parent="1">
          <mxGeometry x="80" y="760" width="1240" height="160" as="geometry"/>
        </mxCell>
        <mxCell id="runtime-label" value="APPLICATION RUNTIME BEHAVIOR" style="text;html=1;strokeColor=none;fillColor=#0288D1;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=1;fontSize=14;fontStyle=1;fontColor=#ffffff;" vertex="1" parent="1">
          <mxGeometry x="580" y="770" width="240" height="30" as="geometry"/>
        </mxCell>
        
        <!-- Startup Process -->
        <mxCell id="startup-process" value="STARTUP SEQUENCE&#xa;━━━━━━━━━━━━━━━━&#xa;1. Load env variables&#xa;2. Validate config&#xa;3. Set process title&#xa;4. Log startup info&#xa;5. Configure middleware&#xa;6. Mount API routes&#xa;7. Start HTTP server" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#B3E5FC;strokeColor=#0277BD;fontStyle=0;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="100" y="810" width="220" height="100" as="geometry"/>
        </mxCell>
        
        <!-- Request Processing -->
        <mxCell id="request-processing" value="REQUEST PROCESSING&#xa;━━━━━━━━━━━━━━━━━━&#xa;1. Apply security headers&#xa;2. Log HTTP request&#xa;3. Parse JSON body&#xa;4. Start timeout timer&#xa;5. Match route&#xa;6. Execute handler&#xa;7. Generate response" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#B3E5FC;strokeColor=#0277BD;fontStyle=0;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="340" y="810" width="220" height="100" as="geometry"/>
        </mxCell>
        
        <!-- Response Formats -->
        <mxCell id="response-formats" value="RESPONSE FORMATS&#xa;━━━━━━━━━━━━━━━━&#xa;GET / Response:&#xa;{&quot;message&quot;: &quot;Hello, Docker!&quot;,&#xa; &quot;environment&quot;: &quot;dev&quot;,&#xa; &quot;version&quot;: &quot;1.0.0&quot;}&#xa;&#xa;GET /health Response:&#xa;{&quot;status&quot;: &quot;ok&quot;,&#xa; &quot;uptime&quot;: seconds}" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#B3E5FC;strokeColor=#0277BD;fontStyle=0;fontSize=9;align=left;fontFamily=Courier New;" vertex="1" parent="1">
          <mxGeometry x="580" y="810" width="220" height="100" as="geometry"/>
        </mxCell>
        
        <!-- Error Handling -->
        <mxCell id="error-handling" value="ERROR HANDLING&#xa;━━━━━━━━━━━━━━&#xa;• 404 unknown routes&#xa;• 400 JSON parse errors&#xa;• 413 oversized requests&#xa;• 408 timeouts&#xa;• 500 server errors&#xa;• Stack trace control&#xa;• Graceful degradation" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#B3E5FC;strokeColor=#0277BD;fontStyle=0;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="820" y="810" width="220" height="100" as="geometry"/>
        </mxCell>
        
        <!-- Configuration Constants -->
        <mxCell id="app-constants" value="APP CONSTANTS&#xa;━━━━━━━━━━━━━&#xa;• REQUEST_TIMEOUT: 5s&#xa;• SHUTDOWN_TIMEOUT: 10s&#xa;• SIZE_LIMIT: 1mb&#xa;• DEFAULT_PORT: 3000&#xa;• Memory logging&#xa;• Process title&#xa;• Environment behavior" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#B3E5FC;strokeColor=#0277BD;fontStyle=0;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="1060" y="810" width="220" height="100" as="geometry"/>
        </mxCell>
        
        <!-- Module Dependencies -->
        <mxCell id="index-to-config" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeWidth=2;strokeColor=#FF9800;" edge="1" parent="1" source="index-module" target="config-module">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>
        <mxCell id="config-import-label" value="imports" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];fontSize=10;fontStyle=1;fontColor=#FF9800;" vertex="1" connectable="0" parent="index-to-config">
          <mxGeometry x="-0.1" y="1" relative="1" as="geometry"/>
        </mxCell>
        
        <mxCell id="index-to-routes" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeWidth=2;strokeColor=#2196F3;" edge="1" parent="1" source="index-module" target="routes-module">
          <mxGeometry relative="1" as="geometry">
            <Array as="points">
              <mxPoint x="590" y="260" />
              <mxPoint x="1080" y="260" />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id="routes-mount-label" value="mounts" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];fontSize=10;fontStyle=1;fontColor=#2196F3;" vertex="1" connectable="0" parent="index-to-routes">
          <mxGeometry x="-0.1" y="1" relative="1" as="geometry"/>
        </mxCell>
        
        <mxCell id="index-to-middleware" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeWidth=2;strokeColor=#9C27B0;" edge="1" parent="1" source="index-module" target="middleware-module">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>
        <mxCell id="middleware-use-label" value="uses" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];fontSize=10;fontStyle=1;fontColor=#9C27B0;" vertex="1" connectable="0" parent="index-to-middleware">
          <mxGeometry x="-0.1" y="1" relative="1" as="geometry"/>
        </mxCell>
        
        <mxCell id="routes-to-config" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeWidth=2;strokeColor=#4CAF50;" edge="1" parent="1" source="routes-module" target="config-module">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>
        <mxCell id="config-require-label" value="requires" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];fontSize=10;fontStyle=1;fontColor=#4CAF50;" vertex="1" connectable="0" parent="routes-to-config">
          <mxGeometry x="-0.1" y="1" relative="1" as="geometry"/>
        </mxCell>
        
        <mxCell id="testing-to-all" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeWidth=2;strokeColor=#9C27B0;dashed=1;" edge="1" parent="1" source="testing-module" target="routes-module">
          <mxGeometry relative="1" as="geometry">
            <Array as="points">
              <mxPoint x="840" y="400" />
              <mxPoint x="1080" y="400" />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id="testing-label" value="tests" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];fontSize=10;fontStyle=1;fontColor=#9C27B0;" vertex="1" connectable="0" parent="testing-to-all">
          <mxGeometry x="-0.1" y="1" relative="1" as="geometry"/>
        </mxCell>
        
        <!-- Middleware Flow -->
        <mxCell id="middleware-flow-1" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeWidth=2;strokeColor=#F44336;" edge="1" parent="1" source="middleware-1" target="middleware-2">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>
        
        <mxCell id="middleware-flow-2" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeWidth=2;strokeColor=#F44336;" edge="1" parent="1" source="middleware-2" target="middleware-3">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>
        
        <mxCell id="middleware-flow-3" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeWidth=2;strokeColor=#F44336;" edge="1" parent="1" source="middleware-3" target="middleware-4">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>
        
        <mxCell id="middleware-flow-4" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeWidth=2;strokeColor=#F44336;" edge="1" parent="1" source="middleware-4" target="middleware-5">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>
        
        <mxCell id="middleware-flow-5" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeWidth=2;strokeColor=#F44336;" edge="1" parent="1" source="middleware-5" target="middleware-6">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>
        
        <mxCell id="middleware-flow-6" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeWidth=2;strokeColor=#F44336;" edge="1" parent="1" source="middleware-6" target="middleware-7">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>
        
        <!-- Summary -->
        <mxCell id="summary-container" value="" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFF9C4;strokeColor=#F9A825;strokeWidth=2;" vertex="1" parent="1">
          <mxGeometry x="80" y="940" width="1240" height="80" as="geometry"/>
        </mxCell>
        <mxCell id="summary-text" value="APPLICATION OVERVIEW: Express.js web application with modular architecture&#xa;• 340 lines of code • 2 API endpoints • Error handling and graceful shutdown&#xa;• Test coverage with Jest • Configuration management • Security middleware • Environment-aware behavior" style="text;html=1;strokeColor=none;fillColor=#FFF9C4;align=left;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=11;fontStyle=0;fontColor=#F57F17;" vertex="1" parent="1">
          <mxGeometry x="100" y="950" width="1200" height="60" as="geometry"/>
        </mxCell>
        
      </root>
    </mxGraphModel>
  </diagram>
</mxfile>