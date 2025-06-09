<?xml version="1.0" encoding="UTF-8"?>
<mxfile host="app.diagrams.net" modified="2025-06-08T00:00:00.000Z" agent="draw.io" etag="version" version="24.0.0" type="device">
  <diagram name="GitHub Actions CI/CD Pipeline Architecture" id="github-actions-cicd-pipeline">
    <mxGraphModel dx="2074" dy="1129" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="1400" pageHeight="1200" background="#ffffff">
      <root>
        <mxCell id="0"/>
        <mxCell id="1" parent="0"/>
        
        <!-- Title -->
        <mxCell id="title" value="GitHub Actions CI/CD Pipeline Architecture - 6 Workflows Implementation" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=20;fontStyle=1;fontColor=#2E3440;" vertex="1" parent="1">
          <mxGeometry x="200" y="20" width="1000" height="40" as="geometry"/>
        </mxCell>
        
        <!-- Trigger Events -->
        <mxCell id="triggers-container" value="" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E3F2FD;strokeColor=#1976D2;strokeWidth=2;" vertex="1" parent="1">
          <mxGeometry x="80" y="80" width="1240" height="100" as="geometry"/>
        </mxCell>
        <mxCell id="triggers-label" value="CI/CD TRIGGER EVENTS" style="text;html=1;strokeColor=none;fillColor=#1976D2;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=1;fontSize=14;fontStyle=1;fontColor=#ffffff;" vertex="1" parent="1">
          <mxGeometry x="620" y="90" width="200" height="30" as="geometry"/>
        </mxCell>
        
        <!-- Trigger Types -->
        <mxCell id="push-main" value="📤 push (main)&#xa;Triggers: ci.yml, deploy.yml" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#BBDEFB;strokeColor=#1565C0;fontStyle=1;fontSize=10;" vertex="1" parent="1">
          <mxGeometry x="120" y="130" width="140" height="40" as="geometry"/>
        </mxCell>
        
        <mxCell id="push-develop" value="📤 push (develop)&#xa;Triggers: ci.yml only" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#BBDEFB;strokeColor=#1565C0;fontStyle=1;fontSize=10;" vertex="1" parent="1">
          <mxGeometry x="280" y="130" width="140" height="40" as="geometry"/>
        </mxCell>
        
        <mxCell id="pull-request" value="🔄 pull_request&#xa;Triggers: ci.yml only" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#BBDEFB;strokeColor=#1565C0;fontStyle=1;fontSize=10;" vertex="1" parent="1">
          <mxGeometry x="440" y="130" width="140" height="40" as="geometry"/>
        </mxCell>
        
        <mxCell id="manual-dispatch" value="👨‍💻 workflow_dispatch&#xa;Triggers: deploy.yml manual" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#BBDEFB;strokeColor=#1565C0;fontStyle=1;fontSize=10;" vertex="1" parent="1">
          <mxGeometry x="600" y="130" width="140" height="40" as="geometry"/>
        </mxCell>
        
        <mxCell id="scheduled" value="⏰ schedule (cron)&#xa;Triggers: test-automation.yml" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#BBDEFB;strokeColor=#1565C0;fontStyle=1;fontSize=10;" vertex="1" parent="1">
          <mxGeometry x="760" y="130" width="140" height="40" as="geometry"/>
        </mxCell>
        
        <mxCell id="security-schedule" value="🛡️ schedule (weekly)&#xa;Triggers: security-monitoring.yml" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#BBDEFB;strokeColor=#1565C0;fontStyle=1;fontSize=10;" vertex="1" parent="1">
          <mxGeometry x="920" y="130" width="140" height="40" as="geometry"/>
        </mxCell>
        
        <mxCell id="release-tags" value="🏷️ push (tags)&#xa;Triggers: release-management.yml" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#BBDEFB;strokeColor=#1565C0;fontStyle=1;fontSize=10;" vertex="1" parent="1">
          <mxGeometry x="1080" y="130" width="140" height="40" as="geometry"/>
        </mxCell>
        
        <!-- Main CI Workflow -->
        <mxCell id="ci-container" value="" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E8F5E8;strokeColor=#4CAF50;strokeWidth=2;" vertex="1" parent="1">
          <mxGeometry x="80" y="200" width="1240" height="140" as="geometry"/>
        </mxCell>
        <mxCell id="ci-label" value="CI.YML - CONTINUOUS INTEGRATION WORKFLOW" style="text;html=1;strokeColor=none;fillColor=#4CAF50;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=1;fontSize=14;fontStyle=1;fontColor=#ffffff;" vertex="1" parent="1">
          <mxGeometry x="580" y="210" width="320" height="30" as="geometry"/>
        </mxCell>
        
        <!-- CI Jobs -->
        <mxCell id="test-job" value="🧪 Test Job&#xa;• Checkout code&#xa;• Setup Node.js 20&#xa;• npm ci&#xa;• npm run lint&#xa;• npm test&#xa;• npm run format:check&#xa;• Upload test results" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#C8E6C9;strokeColor=#66BB6A;fontStyle=0;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="120" y="250" width="180" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="build-job" value="🏗️ Build Job&#xa;• Checkout code&#xa;• Setup Docker Buildx&#xa;• Build Docker image&#xa;• Test container startup&#xa;• Health check validation&#xa;• Build success verification" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#C8E6C9;strokeColor=#66BB6A;fontStyle=0;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="320" y="250" width="180" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="security-job" value="🔍 Security Job&#xa;• Checkout code&#xa;• Setup Node.js 20&#xa;• npm ci&#xa;• npm audit --audit-level high&#xa;• Continue on error&#xa;• Report vulnerabilities" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#C8E6C9;strokeColor=#66BB6A;fontStyle=0;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="520" y="250" width="180" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="quality-gates" value="✅ Quality Gates&#xa;• All tests must pass&#xa;• Linting must pass&#xa;• Format check must pass&#xa;• Build must succeed&#xa;• Security scan completion&#xa;• Parallel job execution" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#C8E6C9;strokeColor=#66BB6A;fontStyle=0;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="720" y="250" width="180" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="ci-artifacts" value="📦 CI Artifacts&#xa;• Test coverage reports&#xa;• Build logs&#xa;• Security scan results&#xa;• Docker build success&#xa;• Quality metrics&#xa;• Job execution times" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#C8E6C9;strokeColor=#66BB6A;fontStyle=0;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="920" y="250" width="180" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="ci-notifications" value="📢 Notifications&#xa;• PR status checks&#xa;• Build status badges&#xa;• Slack/email alerts&#xa;• GitHub commit status&#xa;• Merge blocking on failure&#xa;• Success confirmations" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#C8E6C9;strokeColor=#66BB6A;fontStyle=0;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="1120" y="250" width="180" height="80" as="geometry"/>
        </mxCell>
        
        <!-- Deployment Workflow -->
        <mxCell id="deploy-container" value="" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#F3E5F5;strokeColor=#9C27B0;strokeWidth=2;" vertex="1" parent="1">
          <mxGeometry x="80" y="360" width="1240" height="160" as="geometry"/>
        </mxCell>
        <mxCell id="deploy-label" value="DEPLOY.YML - GOOGLE CLOUD RUN DEPLOYMENT WORKFLOW" style="text;html=1;strokeColor=none;fillColor=#9C27B0;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=1;fontSize=14;fontStyle=1;fontColor=#ffffff;" vertex="1" parent="1">
          <mxGeometry x="520" y="370" width="360" height="30" as="geometry"/>
        </mxCell>
        
        <!-- Deployment Steps -->
        <mxCell id="gcp-auth" value="🔐 GCP Authentication&#xa;• Service account setup&#xa;• gcloud CLI configuration&#xa;• Docker auth helper&#xa;• Project ID validation&#xa;• Permissions verification" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E1BEE7;strokeColor=#8E24AA;fontStyle=0;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="120" y="410" width="180" height="100" as="geometry"/>
        </mxCell>
        
        <mxCell id="artifact-registry" value="🗃️ Artifact Registry&#xa;• Create repository&#xa;• us-central1 region&#xa;• Docker format setup&#xa;• Registry authentication&#xa;• Image storage preparation" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E1BEE7;strokeColor=#8E24AA;fontStyle=0;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="320" y="410" width="180" height="100" as="geometry"/>
        </mxCell>
        
        <mxCell id="image-build" value="🏗️ Image Build &amp; Push&#xa;• Docker build with build args&#xa;• Multi-environment tagging&#xa;• NODE_ENV configuration&#xa;• Commit SHA tagging&#xa;• Registry push operation" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E1BEE7;strokeColor=#8E24AA;fontStyle=0;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="520" y="410" width="180" height="100" as="geometry"/>
        </mxCell>
        
        <mxCell id="cloud-run-deploy" value="☁️ Cloud Run Deployment&#xa;• Environment selection&#xa;• Resource allocation (512Mi, 1CPU)&#xa;• Instance scaling (0-10)&#xa;• Timeout configuration (300s)&#xa;• Traffic allocation" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E1BEE7;strokeColor=#8E24AA;fontStyle=0;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="720" y="410" width="180" height="100" as="geometry"/>
        </mxCell>
        
        <mxCell id="deployment-test" value="🧪 Deployment Testing&#xa;• Health check validation&#xa;• Endpoint testing (/ and /health)&#xa;• Response verification&#xa;• Performance baseline&#xa;• Service availability check" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E1BEE7;strokeColor=#8E24AA;fontStyle=0;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="920" y="410" width="180" height="100" as="geometry"/>
        </mxCell>
        
        <mxCell id="deployment-info" value="📊 Deployment Info Storage&#xa;• Custom action usage&#xa;• Cloud Storage upload&#xa;• Deployment metadata&#xa;• Service URLs&#xa;• Version information" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E1BEE7;strokeColor=#8E24AA;fontStyle=0;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="1120" y="410" width="180" height="100" as="geometry"/>
        </mxCell>
        
        <!-- Multi-Environment Strategy -->
        <mxCell id="env-strategy-container" value="" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFEBEE;strokeColor=#F44336;strokeWidth=2;" vertex="1" parent="1">
          <mxGeometry x="80" y="540" width="1240" height="120" as="geometry"/>
        </mxCell>
        <mxCell id="env-strategy-label" value="MULTI-ENVIRONMENT DEPLOYMENT STRATEGY" style="text;html=1;strokeColor=none;fillColor=#F44336;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=1;fontSize=14;fontStyle=1;fontColor=#ffffff;" vertex="1" parent="1">
          <mxGeometry x="560" y="550" width="320" height="30" as="geometry"/>
        </mxCell>
        
        <mxCell id="dev-environment" value="🟢 Development Environment&#xa;• Service: simple-webapp-dev&#xa;• Trigger: Push to main branch&#xa;• Auto-deployment enabled&#xa;• Development configurations&#xa;• Immediate feedback loop" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFCDD2;strokeColor=#E57373;fontStyle=0;fontSize=11;align=left;" vertex="1" parent="1">
          <mxGeometry x="200" y="590" width="240" height="60" as="geometry"/>
        </mxCell>
        
        <mxCell id="test-environment" value="🟡 Testing Environment&#xa;• Service: simple-webapp-test&#xa;• Trigger: Manual dispatch only&#xa;• QA testing environment&#xa;• Staging configurations&#xa;• Pre-production validation" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFCDD2;strokeColor=#E57373;fontStyle=0;fontSize=11;align=left;" vertex="1" parent="1">
          <mxGeometry x="480" y="590" width="240" height="60" as="geometry"/>
        </mxCell>
        
        <mxCell id="prod-environment" value="🔴 Production Environment&#xa;• Service: simple-webapp-prod&#xa;• Trigger: Manual dispatch only&#xa;• Production configurations&#xa;• Stable release deployments&#xa;• Enhanced monitoring" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFCDD2;strokeColor=#E57373;fontStyle=0;fontSize=11;align=left;" vertex="1" parent="1">
          <mxGeometry x="760" y="590" width="240" height="60" as="geometry"/>
        </mxCell>
        
        <mxCell id="environment-isolation" value="🔒 Environment Isolation&#xa;• Separate Cloud Run services&#xa;• Environment-specific configs&#xa;• Independent scaling&#xa;• Isolated networking&#xa;• Resource segregation" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E8EAF6;strokeColor=#3F51B5;fontStyle=0;fontSize=11;align=left;" vertex="1" parent="1">
          <mxGeometry x="1040" y="590" width="240" height="60" as="geometry"/>
        </mxCell>
        
        <!-- Additional Workflows -->
        <mxCell id="additional-workflows-container" value="" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFF3E0;strokeColor=#FF9800;strokeWidth=2;" vertex="1" parent="1">
          <mxGeometry x="80" y="680" width="1240" height="140" as="geometry"/>
        </mxCell>
        <mxCell id="additional-workflows-label" value="ADDITIONAL SPECIALIZED WORKFLOWS (4 WORKFLOWS)" style="text;html=1;strokeColor=none;fillColor=#FF9800;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=1;fontSize=14;fontStyle=1;fontColor=#ffffff;" vertex="1" parent="1">
          <mxGeometry x="580" y="690" width="320" height="30" as="geometry"/>
        </mxCell>
        
        <mxCell id="test-automation" value="🧪 test-automation.yml&#xa;• Scheduled testing (daily)&#xa;• Performance benchmarks&#xa;• Load testing simulation&#xa;• Test data management&#xa;• Cloud Storage uploads&#xa;• Custom action usage" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFE0B2;strokeColor=#FB8C00;fontStyle=0;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="120" y="730" width="220" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="security-monitoring" value="🛡️ security-monitoring.yml&#xa;• Weekly vulnerability scans&#xa;• npm audit comprehensive&#xa;• License compliance check&#xa;• Dependency updates&#xa;• Security report generation&#xa;• Alert notifications" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFE0B2;strokeColor=#FB8C00;fontStyle=0;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="360" y="730" width="220" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="release-management" value="🎉 release-management.yml&#xa;• Git tag creation&#xa;• Release notes generation&#xa;• Changelog automation&#xa;• Asset compilation&#xa;• Version bump handling&#xa;• Distribution preparation" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFE0B2;strokeColor=#FB8C00;fontStyle=0;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="600" y="730" width="220" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="advanced-cicd" value="⚙️ advanced-cicd.yml&#xa;• Complex deployment logic&#xa;• Blue-green deployment prep&#xa;• Rollback mechanisms&#xa;• Advanced environment mgmt&#xa;• Canary deployment support&#xa;• Traffic management" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFE0B2;strokeColor=#FB8C00;fontStyle=0;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="840" y="730" width="220" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="custom-actions-detail" value="🎯 Custom Actions (.github/actions/)&#xa;• manage-test-data/action.yml&#xa;• store-deployment-info/action.yml&#xa;• Reusable workflow components&#xa;• Parameter-driven execution&#xa;• Cross-workflow functionality" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFE0B2;strokeColor=#FB8C00;fontStyle=0;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="1080" y="730" width="220" height="80" as="geometry"/>
        </mxCell>
        
        <!-- Workflow Orchestration -->
        <mxCell id="orchestration-container" value="" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E1F5FE;strokeColor=#0288D1;strokeWidth=2;" vertex="1" parent="1">
          <mxGeometry x="80" y="840" width="1240" height="120" as="geometry"/>
        </mxCell>
        <mxCell id="orchestration-label" value="WORKFLOW ORCHESTRATION &amp; DEPENDENCIES" style="text;html=1;strokeColor=none;fillColor=#0288D1;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=1;fontSize=14;fontStyle=1;fontColor=#ffffff;" vertex="1" parent="1">
          <mxGeometry x="580" y="850" width="280" height="30" as="geometry"/>
        </mxCell>
        
        <mxCell id="workflow-dependencies" value="🔗 Workflow Dependencies&#xa;• CI must pass before deployment&#xa;• Security scans run independently&#xa;• Test automation runs on schedule&#xa;• Release management triggered by tags&#xa;• Advanced CI/CD for complex scenarios" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#B3E5FC;strokeColor=#0277BD;fontStyle=0;fontSize=11;align=left;" vertex="1" parent="1">
          <mxGeometry x="120" y="890" width="280" height="60" as="geometry"/>
        </mxCell>
        
        <mxCell id="parallel-execution" value="⚡ Parallel Execution&#xa;• CI jobs run concurrently&#xa;• Multiple environment deployments&#xa;• Independent workflow triggers&#xa;• Resource optimization&#xa;• Faster feedback loops" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#B3E5FC;strokeColor=#0277BD;fontStyle=0;fontSize=11;align=left;" vertex="1" parent="1">
          <mxGeometry x="420" y="890" width="280" height="60" as="geometry"/>
        </mxCell>
        
        <mxCell id="failure-handling" value="⚠️ Failure Handling&#xa;• Automatic retry mechanisms&#xa;• Graceful degradation&#xa;• Error notification systems&#xa;• Rollback capabilities&#xa;• Debug information collection" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#B3E5FC;strokeColor=#0277BD;fontStyle=0;fontSize=11;align=left;" vertex="1" parent="1">
          <mxGeometry x="720" y="890" width="280" height="60" as="geometry"/>
        </mxCell>
        
        <mxCell id="monitoring-feedback" value="📊 Monitoring &amp; Feedback&#xa;• Real-time workflow status&#xa;• Performance metrics collection&#xa;• Success/failure rates&#xa;• Deployment frequency tracking&#xa;• Quality trend analysis" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#B3E5FC;strokeColor=#0277BD;fontStyle=0;fontSize=11;align=left;" vertex="1" parent="1">
          <mxGeometry x="1020" y="890" width="280" height="60" as="geometry"/>
        </mxCell>
        
        <!-- Data Flow Connections -->
        <mxCell id="trigger-to-ci" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeWidth=2;strokeColor=#4CAF50;" edge="1" parent="1" source="push-main" target="test-job">
          <mxGeometry relative="1" as="geometry">
            <Array as="points">
              <mxPoint x="190" y="190" />
              <mxPoint x="210" y="190" />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id="trigger-ci-label" value="activates" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];fontSize=10;fontStyle=1;fontColor=#4CAF50;" vertex="1" connectable="0" parent="trigger-to-ci">
          <mxGeometry x="-0.1" y="1" relative="1" as="geometry"/>
        </mxCell>
        
        <mxCell id="ci-to-deploy" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeWidth=3;strokeColor=#9C27B0;" edge="1" parent="1" source="quality-gates" target="gcp-auth">
          <mxGeometry relative="1" as="geometry">
            <Array as="points">
              <mxPoint x="810" y="350" />
              <mxPoint x="210" y="350" />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id="ci-deploy-label" value="triggers on success" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];fontSize=10;fontStyle=1;fontColor=#9C27B0;" vertex="1" connectable="0" parent="ci-to-deploy">
          <mxGeometry x="-0.1" y="1" relative="1" as="geometry"/>
        </mxCell>
        
        <mxCell id="deploy-flow-1" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeWidth=2;strokeColor=#9C27B0;" edge="1" parent="1" source="gcp-auth" target="artifact-registry">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>
        <mxCell id="deploy-flow-1-label" value="setup" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];fontSize=10;fontStyle=1;fontColor=#9C27B0;" vertex="1" connectable="0" parent="deploy-flow-1">
          <mxGeometry x="-0.1" y="1" relative="1" as="geometry"/>
        </mxCell>
        
        <mxCell id="deploy-flow-2" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeWidth=2;strokeColor=#9C27B0;" edge="1" parent="1" source="artifact-registry" target="image-build">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>
        <mxCell id="deploy-flow-2-label" value="prepare" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];fontSize=10;fontStyle=1;fontColor=#9C27B0;" vertex="1" connectable="0" parent="deploy-flow-2">
          <mxGeometry x="-0.1" y="1" relative="1" as="geometry"/>
        </mxCell>
        
        <mxCell id="deploy-flow-3" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeWidth=2;strokeColor=#9C27B0;" edge="1" parent="1" source="image-build" target="cloud-run-deploy">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>
        <mxCell id="deploy-flow-3-label" value="build &amp; push" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];fontSize=10;fontStyle=1;fontColor=#9C27B0;" vertex="1" connectable="0" parent="deploy-flow-3">
          <mxGeometry x="-0.1" y="1" relative="1" as="geometry"/>
        </mxCell>
        
        <mxCell id="deploy-flow-4" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeWidth=2;strokeColor=#9C27B0;" edge="1" parent="1" source="cloud-run-deploy" target="deployment-test">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>
        <mxCell id="deploy-flow-4-label" value="deploy" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];fontSize=10;fontStyle=1;fontColor=#9C27B0;" vertex="1" connectable="0" parent="deploy-flow-4">
          <mxGeometry x="-0.1" y="1" relative="1" as="geometry"/>
        </mxCell>
        
        <mxCell id="deploy-flow-5" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeWidth=2;strokeColor=#9C27B0;" edge="1" parent="1" source="deployment-test" target="deployment-info">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>
        <mxCell id="deploy-flow-5-label" value="verify &amp; store" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];fontSize=10;fontStyle=1;fontColor=#9C27B0;" vertex="1" connectable="0" parent="deploy-flow-5">
          <mxGeometry x="-0.1" y="1" relative="1" as="geometry"/>
        </mxCell>
        
        <mxCell id="deploy-to-envs" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeWidth=2;strokeColor=#F44336;" edge="1" parent="1" source="cloud-run-deploy" target="dev-environment">
          <mxGeometry relative="1" as="geometry">
            <Array as="points">
              <mxPoint x="810" y="530" />
              <mxPoint x="320" y="530" />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id="deploy-envs-label" value="deploys to environments" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];fontSize=10;fontStyle=1;fontColor=#F44336;" vertex="1" connectable="0" parent="deploy-to-envs">
          <mxGeometry x="-0.1" y="1" relative="1" as="geometry"/>
        </mxCell>
        
        <!-- Schedule Connections -->
        <mxCell id="schedule-to-test-auto" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeWidth=2;strokeColor=#FF9800;" edge="1" parent="1" source="scheduled" target="test-automation">
          <mxGeometry relative="1" as="geometry">
            <Array as="points">
              <mxPoint x="830" y="180" />
              <mxPoint x="1350" y="180" />
              <mxPoint x="1350" y="770" />
              <mxPoint x="230" y="770" />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id="schedule-test-label" value="triggers daily" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];fontSize=10;fontStyle=1;fontColor=#FF9800;" vertex="1" connectable="0" parent="schedule-to-test-auto">
          <mxGeometry x="-0.1" y="1" relative="1" as="geometry"/>
        </mxCell>
        
        <mxCell id="security-schedule-to-monitor" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeWidth=2;strokeColor=#FF9800;" edge="1" parent="1" source="security-schedule" target="security-monitoring">
          <mxGeometry relative="1" as="geometry">
            <Array as="points">
              <mxPoint x="990" y="180" />
              <mxPoint x="1360" y="180" />
              <mxPoint x="1360" y="770" />
              <mxPoint x="470" y="770" />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id="security-schedule-label" value="triggers weekly" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];fontSize=10;fontStyle=1;fontColor=#FF9800;" vertex="1" connectable="0" parent="security-schedule-to-monitor">
          <mxGeometry x="-0.1" y="1" relative="1" as="geometry"/>
        </mxCell>
        
        <!-- Summary -->
        <mxCell id="summary-container" value="" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFF9C4;strokeColor=#F9A825;strokeWidth=2;" vertex="1" parent="1">
          <mxGeometry x="80" y="980" width="1240" height="80" as="geometry"/>
        </mxCell>
        <mxCell id="summary-text" value="📋 CI/CD PIPELINE OVERVIEW: GitHub Actions implementation with 6 workflows and 2 custom actions&#xa;• Automated testing, building, security scanning • Multi-environment Google Cloud Run deployment • Scheduled automation and release management&#xa;• DevOps automation with parallel execution • Quality gates and failure handling • Monitoring and feedback loops" style="text;html=1;strokeColor=none;fillColor=#FFF9C4;align=left;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=11;fontStyle=0;fontColor=#F57F17;" vertex="1" parent="1">
          <mxGeometry x="100" y="990" width="1200" height="60" as="geometry"/>
        </mxCell>
        
      </root>
    </mxGraphModel>
  </diagram>
</mxfile>