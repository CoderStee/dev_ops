<?xml version="1.0" encoding="UTF-8"?>
<mxfile host="app.diagrams.net" modified="2025-06-08T00:00:00.000Z" agent="draw.io" etag="version" version="24.0.0" type="device">
  <diagram name="DevOps CI/CD System Architecture" id="devops-system-architecture">
    <mxGraphModel dx="2074" dy="1129" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="1400" pageHeight="1000" background="#ffffff">
      <root>
        <mxCell id="0"/>
        <mxCell id="1" parent="0"/>
        
        <!-- Title -->
        <mxCell id="title" value="DevOps CI/CD System Architecture" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=20;fontStyle=1;fontColor=#2E3440;" vertex="1" parent="1">
          <mxGeometry x="300" y="20" width="800" height="40" as="geometry"/>
        </mxCell>
        
        <!-- Development Environment Container -->
        <mxCell id="dev-env-container" value="" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E8F4FD;strokeColor=#1E88E5;strokeWidth=2;dashed=1;" vertex="1" parent="1">
          <mxGeometry x="80" y="80" width="1240" height="140" as="geometry"/>
        </mxCell>
        
        <mxCell id="dev-env-label" value="DEVELOPMENT ENVIRONMENT" style="text;html=1;strokeColor=none;fillColor=#1E88E5;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=1;fontSize=14;fontStyle=1;fontColor=#ffffff;" vertex="1" parent="1">
          <mxGeometry x="620" y="90" width="240" height="30" as="geometry"/>
        </mxCell>
        
        <!-- Developer Tools -->
        <mxCell id="developer" value="Developer&#xa;Local Environment" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#81C784;strokeColor=#388E3C;fontStyle=1;fontSize=11;" vertex="1" parent="1">
          <mxGeometry x="120" y="130" width="120" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="ide" value="IDE&#xa;VS Code/WebStorm&#xa;ESLint + Prettier" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#A5D6A7;strokeColor=#4CAF50;fontStyle=1;fontSize=11;" vertex="1" parent="1">
          <mxGeometry x="260" y="130" width="120" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="docker-local" value="Docker Desktop&#xa;3 Profiles:&#xa;dev/test/prod" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#90CAF9;strokeColor=#1976D2;fontStyle=1;fontSize=11;" vertex="1" parent="1">
          <mxGeometry x="400" y="130" width="120" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="testing-local" value="Local Testing&#xa;Jest + Supertest&#xa;npm test" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFB74D;strokeColor=#F57C00;fontStyle=1;fontSize=11;" vertex="1" parent="1">
          <mxGeometry x="540" y="130" width="120" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="quality-tools" value="Code Quality&#xa;ESLint, Prettier&#xa;npm run quality" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#CE93D8;strokeColor=#8E24AA;fontStyle=1;fontSize=11;" vertex="1" parent="1">
          <mxGeometry x="680" y="130" width="120" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="git-local" value="Git&#xa;Version Control&#xa;Feature Branches" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFAB91;strokeColor=#FF5722;fontStyle=1;fontSize=11;" vertex="1" parent="1">
          <mxGeometry x="820" y="130" width="120" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="env-config" value="Environment&#xa;dotenv config&#xa;NODE_ENV setup" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFF9C4;strokeColor=#F9A825;fontStyle=1;fontSize=11;" vertex="1" parent="1">
          <mxGeometry x="960" y="130" width="120" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="nodemon" value="Nodemon&#xa;Auto-restart&#xa;npm run dev" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E1F5FE;strokeColor=#0288D1;fontStyle=1;fontSize=11;" vertex="1" parent="1">
          <mxGeometry x="1100" y="130" width="120" height="80" as="geometry"/>
        </mxCell>
        
        <!-- GitHub Repository & CI/CD Container -->
        <mxCell id="github-container" value="" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFF3E0;strokeColor=#FF9800;strokeWidth=2;dashed=1;" vertex="1" parent="1">
          <mxGeometry x="80" y="240" width="1240" height="180" as="geometry"/>
        </mxCell>
        
        <mxCell id="github-label" value="GITHUB REPOSITORY &amp; CI/CD AUTOMATION" style="text;html=1;strokeColor=none;fillColor=#FF9800;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=1;fontSize=14;fontStyle=1;fontColor=#ffffff;" vertex="1" parent="1">
          <mxGeometry x="580" y="250" width="320" height="30" as="geometry"/>
        </mxCell>
        
        <!-- Repository -->
        <mxCell id="github-repo" value="GitHub Repository&#xa;• Source code&#xa;• 6 CI/CD workflows&#xa;• 2 custom actions&#xa;• Environment secrets" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFE0B2;strokeColor=#FB8C00;fontStyle=1;fontSize=11;align=left;" vertex="1" parent="1">
          <mxGeometry x="120" y="290" width="180" height="80" as="geometry"/>
        </mxCell>
        
        <!-- GitHub Actions Workflows -->
        <mxCell id="ci-workflow" value="ci.yml&#xa;Lint, Test, Build&#xa;Security scan" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFE0B2;strokeColor=#FB8C00;fontStyle=1;fontSize=10;" vertex="1" parent="1">
          <mxGeometry x="320" y="290" width="110" height="60" as="geometry"/>
        </mxCell>
        
        <mxCell id="deploy-workflow" value="deploy.yml&#xa;Cloud Run&#xa;Multi-environment" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFE0B2;strokeColor=#FB8C00;fontStyle=1;fontSize=10;" vertex="1" parent="1">
          <mxGeometry x="450" y="290" width="110" height="60" as="geometry"/>
        </mxCell>
        
        <mxCell id="test-auto-workflow" value="test-automation.yml&#xa;Scheduled testing&#xa;Cloud storage" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFE0B2;strokeColor=#FB8C00;fontStyle=1;fontSize=10;" vertex="1" parent="1">
          <mxGeometry x="580" y="290" width="110" height="60" as="geometry"/>
        </mxCell>
        
        <mxCell id="security-workflow" value="security-monitoring.yml&#xa;npm audit&#xa;Vulnerability scan" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFE0B2;strokeColor=#FB8C00;fontStyle=1;fontSize=10;" vertex="1" parent="1">
          <mxGeometry x="710" y="290" width="110" height="60" as="geometry"/>
        </mxCell>
        
        <mxCell id="release-workflow" value="release-management.yml&#xa;Version tagging&#xa;Release notes" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFE0B2;strokeColor=#FB8C00;fontStyle=1;fontSize=10;" vertex="1" parent="1">
          <mxGeometry x="840" y="290" width="110" height="60" as="geometry"/>
        </mxCell>
        
        <mxCell id="advanced-workflow" value="advanced-cicd.yml&#xa;Multi-env logic&#xa;Rollback support" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFE0B2;strokeColor=#FB8C00;fontStyle=1;fontSize=10;" vertex="1" parent="1">
          <mxGeometry x="970" y="290" width="110" height="60" as="geometry"/>
        </mxCell>
        
        <!-- Custom Actions -->
        <mxCell id="custom-actions" value="Custom Actions&#xa;• manage-test-data&#xa;• store-deployment-info" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFE0B2;strokeColor=#FB8C00;fontStyle=1;fontSize=11;align=left;" vertex="1" parent="1">
          <mxGeometry x="1100" y="290" width="180" height="80" as="geometry"/>
        </mxCell>
        
        <!-- CI/CD Triggers -->
        <mxCell id="triggers" value="CI/CD Triggers:&#xa;• Push to main/develop • Pull requests • Manual dispatch&#xa;• Scheduled runs • Release tags" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFCDD2;strokeColor=#F44336;fontStyle=0;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="320" y="360" width="760" height="50" as="geometry"/>
        </mxCell>
        
        <!-- Google Cloud Platform Container -->
        <mxCell id="gcp-container" value="" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#F3E5F5;strokeColor=#9C27B0;strokeWidth=2;dashed=1;" vertex="1" parent="1">
          <mxGeometry x="80" y="440" width="1240" height="160" as="geometry"/>
        </mxCell>
        
        <mxCell id="gcp-label" value="GOOGLE CLOUD PLATFORM - DEPLOYMENT TARGET" style="text;html=1;strokeColor=none;fillColor=#9C27B0;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=1;fontSize=14;fontStyle=1;fontColor=#ffffff;" vertex="1" parent="1">
          <mxGeometry x="580" y="450" width="320" height="30" as="geometry"/>
        </mxCell>
        
        <!-- GCP Services -->
        <mxCell id="artifact-registry" value="Artifact Registry&#xa;• Docker images&#xa;• us-central1&#xa;• SHA-based tags&#xa;• Multi-environment" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E1BEE7;strokeColor=#8E24AA;fontStyle=1;fontSize=11;align=left;" vertex="1" parent="1">
          <mxGeometry x="120" y="490" width="180" height="100" as="geometry"/>
        </mxCell>
        
        <mxCell id="cloud-run-dev" value="Cloud Run - DEV&#xa;• simple-webapp-dev&#xa;• Auto-deploy on main&#xa;• 512Mi, 1 CPU&#xa;• 0-10 instances" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E1BEE7;strokeColor=#8E24AA;fontStyle=1;fontSize=11;align=left;" vertex="1" parent="1">
          <mxGeometry x="320" y="490" width="180" height="100" as="geometry"/>
        </mxCell>
        
        <mxCell id="cloud-run-test" value="Cloud Run - TEST&#xa;• simple-webapp-test&#xa;• Manual dispatch&#xa;• 512Mi, 1 CPU&#xa;• Isolated testing" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E1BEE7;strokeColor=#8E24AA;fontStyle=1;fontSize=11;align=left;" vertex="1" parent="1">
          <mxGeometry x="520" y="490" width="180" height="100" as="geometry"/>
        </mxCell>
        
        <mxCell id="cloud-run-prod" value="Cloud Run - PROD&#xa;• simple-webapp-prod&#xa;• Manual deploy only&#xa;• 512Mi, 1 CPU&#xa;• Production config" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E1BEE7;strokeColor=#8E24AA;fontStyle=1;fontSize=11;align=left;" vertex="1" parent="1">
          <mxGeometry x="720" y="490" width="180" height="100" as="geometry"/>
        </mxCell>
        
        <mxCell id="cloud-storage" value="Cloud Storage&#xa;• Test artifacts&#xa;• Deployment logs&#xa;• Build metadata&#xa;• Free tier usage" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E1BEE7;strokeColor=#8E24AA;fontStyle=1;fontSize=11;align=left;" vertex="1" parent="1">
          <mxGeometry x="920" y="490" width="180" height="100" as="geometry"/>
        </mxCell>
        
        <mxCell id="iam-secrets" value="IAM &amp; Secrets&#xa;• Service accounts&#xa;• GitHub secrets&#xa;• Access control&#xa;• API keys" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E1BEE7;strokeColor=#8E24AA;fontStyle=1;fontSize=11;align=left;" vertex="1" parent="1">
          <mxGeometry x="1120" y="490" width="180" height="100" as="geometry"/>
        </mxCell>
        
        <!-- End Users Container -->
        <mxCell id="users-container" value="" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E8F5E8;strokeColor=#4CAF50;strokeWidth=2;dashed=1;" vertex="1" parent="1">
          <mxGeometry x="80" y="620" width="1240" height="100" as="geometry"/>
        </mxCell>
        
        <mxCell id="users-label" value="END USERS &amp; ACCESS" style="text;html=1;strokeColor=none;fillColor=#4CAF50;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=1;fontSize=14;fontStyle=1;fontColor=#ffffff;" vertex="1" parent="1">
          <mxGeometry x="620" y="630" width="200" height="30" as="geometry"/>
        </mxCell>
        
        <mxCell id="dev-users" value="Development Users&#xa;Direct HTTPS access&#xa;Auto-updated environment" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#C8E6C9;strokeColor=#66BB6A;fontStyle=1;fontSize=11;align=center;" vertex="1" parent="1">
          <mxGeometry x="200" y="670" width="200" height="40" as="geometry"/>
        </mxCell>
        
        <mxCell id="test-users" value="Testing Users&#xa;Manual deployment&#xa;Isolated test environment" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFF9C4;strokeColor=#F9A825;fontStyle=1;fontSize=11;align=center;" vertex="1" parent="1">
          <mxGeometry x="450" y="670" width="200" height="40" as="geometry"/>
        </mxCell>
        
        <mxCell id="prod-users" value="Production Users&#xa;Stable production build&#xa;Manual deployment control" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFCDD2;strokeColor=#E57373;fontStyle=1;fontSize=11;align=center;" vertex="1" parent="1">
          <mxGeometry x="700" y="670" width="200" height="40" as="geometry"/>
        </mxCell>
        
        <mxCell id="monitoring" value="Basic Monitoring&#xa;Health endpoints, Cloud Run logs" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E1F5FE;strokeColor=#0288D1;fontStyle=1;fontSize=11;align=center;" vertex="1" parent="1">
          <mxGeometry x="950" y="670" width="200" height="40" as="geometry"/>
        </mxCell>
        
        <!-- Security Layer Container -->
        <mxCell id="security-container" value="" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFEBEE;strokeColor=#F44336;strokeWidth=2;dashed=1;" vertex="1" parent="1">
          <mxGeometry x="80" y="740" width="1240" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="security-label" value="SECURITY IMPLEMENTATION" style="text;html=1;strokeColor=none;fillColor=#F44336;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=1;fontSize=14;fontStyle=1;fontColor=#ffffff;" vertex="1" parent="1">
          <mxGeometry x="620" y="750" width="200" height="30" as="geometry"/>
        </mxCell>
        
        <mxCell id="npm-audit" value="npm audit&#xa;--audit-level high" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFCDD2;strokeColor=#E57373;fontStyle=1;fontSize=10;" vertex="1" parent="1">
          <mxGeometry x="200" y="790" width="120" height="20" as="geometry"/>
        </mxCell>
        
        <mxCell id="helmet-security" value="Helmet.js&#xa;Security headers" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFCDD2;strokeColor=#E57373;fontStyle=1;fontSize=10;" vertex="1" parent="1">
          <mxGeometry x="340" y="790" width="120" height="20" as="geometry"/>
        </mxCell>
        
        <mxCell id="github-secrets-security" value="GitHub Secrets&#xa;GCP credentials" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFCDD2;strokeColor=#E57373;fontStyle=1;fontSize=10;" vertex="1" parent="1">
          <mxGeometry x="480" y="790" width="120" height="20" as="geometry"/>
        </mxCell>
        
        <mxCell id="docker-health" value="Health Checks&#xa;Container monitoring" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFCDD2;strokeColor=#E57373;fontStyle=1;fontSize=10;" vertex="1" parent="1">
          <mxGeometry x="620" y="790" width="120" height="20" as="geometry"/>
        </mxCell>
        
        <mxCell id="basic-validation" value="Request Validation&#xa;Basic input checks" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFCDD2;strokeColor=#E57373;fontStyle=1;fontSize=10;" vertex="1" parent="1">
          <mxGeometry x="760" y="790" width="120" height="20" as="geometry"/>
        </mxCell>
        
        <mxCell id="security-note" value="Security implementation&#xa;using industry standards" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E8EAF6;strokeColor=#3F51B5;fontStyle=0;fontSize=10;" vertex="1" parent="1">
          <mxGeometry x="900" y="790" width="200" height="20" as="geometry"/>
        </mxCell>
        
        <!-- Project Summary Container -->
        <mxCell id="summary-container" value="" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFF9C4;strokeColor=#F9A825;strokeWidth=2;" vertex="1" parent="1">
          <mxGeometry x="80" y="840" width="1240" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="summary-text" value="SYSTEM OVERVIEW: DevOps CI/CD pipeline with automated deployment&#xa;• Express.js web application with 2 endpoints • 6 GitHub Actions workflows • 2 custom actions • Multi-environment Google Cloud Run deployment&#xa;• Security implementation • Automated testing • Code quality tools • Free tier compliant" style="text;html=1;strokeColor=none;fillColor=#FFF9C4;align=left;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=11;fontStyle=0;fontColor=#F57F17;" vertex="1" parent="1">
          <mxGeometry x="100" y="850" width="1200" height="60" as="geometry"/>
        </mxCell>
        
        <!-- Key Data Flow Arrows -->
        <mxCell id="dev-to-git" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeWidth=2;strokeColor=#4CAF50;" edge="1" parent="1" source="developer" target="github-repo">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>
        
        <mxCell id="github-to-ci" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeWidth=2;strokeColor=#FF9800;" edge="1" parent="1" source="github-repo" target="ci-workflow">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>
        
        <mxCell id="ci-to-deploy" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeWidth=2;strokeColor=#9C27B0;" edge="1" parent="1" source="deploy-workflow" target="artifact-registry">
          <mxGeometry relative="1" as="geometry">
            <Array as="points">
              <mxPoint x="505" y="430"/>
              <mxPoint x="210" y="430"/>
            </Array>
          </mxGeometry>
        </mxCell>
        
        <mxCell id="registry-to-dev" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeWidth=2;strokeColor=#9C27B0;" edge="1" parent="1" source="artifact-registry" target="cloud-run-dev">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>
        
        <mxCell id="registry-to-test" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeWidth=2;strokeColor=#9C27B0;dashed=1;" edge="1" parent="1" source="artifact-registry" target="cloud-run-test">
          <mxGeometry relative="1" as="geometry">
            <Array as="points">
              <mxPoint x="210" y="470"/>
              <mxPoint x="610" y="470"/>
            </Array>
          </mxGeometry>
        </mxCell>
        
        <mxCell id="registry-to-prod" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeWidth=2;strokeColor=#9C27B0;dashed=1;" edge="1" parent="1" source="artifact-registry" target="cloud-run-prod">
          <mxGeometry relative="1" as="geometry">
            <Array as="points">
              <mxPoint x="210" y="470"/>
              <mxPoint x="810" y="470"/>
            </Array>
          </mxGeometry>
        </mxCell>
        
        <mxCell id="dev-to-users" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeWidth=2;strokeColor=#4CAF50;" edge="1" parent="1" source="cloud-run-dev" target="dev-users">
          <mxGeometry relative="1" as="geometry">
            <Array as="points">
              <mxPoint x="410" y="610"/>
              <mxPoint x="300" y="610"/>
            </Array>
          </mxGeometry>
        </mxCell>
        
        <mxCell id="test-to-users" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeWidth=2;strokeColor=#F9A825;" edge="1" parent="1" source="cloud-run-test" target="test-users">
          <mxGeometry relative="1" as="geometry">
            <Array as="points">
              <mxPoint x="610" y="610"/>
              <mxPoint x="550" y="610"/>
            </Array>
          </mxGeometry>
        </mxCell>
        
        <mxCell id="prod-to-users" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeWidth=2;strokeColor=#E57373;" edge="1" parent="1" source="cloud-run-prod" target="prod-users">
          <mxGeometry relative="1" as="geometry">
            <Array as="points">
              <mxPoint x="810" y="610"/>
              <mxPoint x="800" y="610"/>
            </Array>
          </mxGeometry>
        </mxCell>
        
      </root>
    </mxGraphModel>
  </diagram>
</mxfile>