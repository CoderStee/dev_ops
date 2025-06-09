<?xml version="1.0" encoding="UTF-8"?>
<mxfile host="app.diagrams.net" modified="2025-06-08T00:00:00.000Z" agent="draw.io" etag="version" version="24.0.0" type="device">
  <diagram name="Development Workflow &amp; Process Architecture" id="development-workflow-process">
    <mxGraphModel dx="2074" dy="1129" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="1400" pageHeight="1200" background="#ffffff">
      <root>
        <mxCell id="0"/>
        <mxCell id="1" parent="0"/>
        
        <!-- Title -->
        <mxCell id="title" value="Development Workflow &amp; Process Architecture - From Code to Production" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=20;fontStyle=1;fontColor=#2E3440;" vertex="1" parent="1">
          <mxGeometry x="200" y="20" width="1000" height="40" as="geometry"/>
        </mxCell>
        
        <!-- Local Development Phase -->
        <mxCell id="local-dev-container" value="" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E8F5E8;strokeColor=#4CAF50;strokeWidth=2;" vertex="1" parent="1">
          <mxGeometry x="80" y="80" width="1240" height="160" as="geometry"/>
        </mxCell>
        <mxCell id="local-dev-label" value="LOCAL DEVELOPMENT PHASE" style="text;html=1;strokeColor=none;fillColor=#4CAF50;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=1;fontSize=14;fontStyle=1;fontColor=#ffffff;" vertex="1" parent="1">
          <mxGeometry x="620" y="90" width="200" height="30" as="geometry"/>
        </mxCell>
        
        <!-- Local Development Steps -->
        <mxCell id="feature-planning" value="📋 Feature Planning&#xa;• Requirements analysis&#xa;• Task breakdown&#xa;• Architecture design&#xa;• Technical specifications&#xa;• Acceptance criteria" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#C8E6C9;strokeColor=#66BB6A;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="120" y="130" width="140" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="local-setup" value="⚙️ Environment Setup&#xa;• Node.js 20 installation&#xa;• Project dependencies&#xa;• npm install&#xa;• Environment variables&#xa;• IDE configuration" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#C8E6C9;strokeColor=#66BB6A;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="280" y="130" width="140" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="feature-development" value="💻 Feature Development&#xa;• Code implementation&#xa;• Express.js routes&#xa;• Middleware creation&#xa;• Error handling&#xa;• Configuration management" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#C8E6C9;strokeColor=#66BB6A;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="440" y="130" width="140" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="local-testing" value="🧪 Local Testing&#xa;• Unit tests (Jest)&#xa;• Integration tests&#xa;• Manual testing&#xa;• npm test&#xa;• Coverage analysis" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#C8E6C9;strokeColor=#66BB6A;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="600" y="130" width="140" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="code-quality" value="🔍 Code Quality&#xa;• ESLint validation&#xa;• Prettier formatting&#xa;• npm run quality&#xa;• Code review prep&#xa;• Documentation" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#C8E6C9;strokeColor=#66BB6A;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="760" y="130" width="140" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="docker-testing" value="🐳 Container Testing&#xa;• Docker build&#xa;• Local container run&#xa;• Health check testing&#xa;• Multi-profile testing&#xa;• Integration validation" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#C8E6C9;strokeColor=#66BB6A;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="920" y="130" width="140" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="git-preparation" value="📁 Git Preparation&#xa;• Commit preparation&#xa;• Branch creation&#xa;• Change staging&#xa;• Commit messages&#xa;• Push to remote" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#C8E6C9;strokeColor=#66BB6A;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="1080" y="130" width="140" height="80" as="geometry"/>
        </mxCell>
        
        <!-- Version Control & Collaboration -->
        <mxCell id="version-control-container" value="" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E3F2FD;strokeColor=#1976D2;strokeWidth=2;" vertex="1" parent="1">
          <mxGeometry x="80" y="260" width="1240" height="140" as="geometry"/>
        </mxCell>
        <mxCell id="version-control-label" value="VERSION CONTROL &amp; COLLABORATION" style="text;html=1;strokeColor=none;fillColor=#1976D2;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=1;fontSize=14;fontStyle=1;fontColor=#ffffff;" vertex="1" parent="1">
          <mxGeometry x="580" y="270" width="280" height="30" as="geometry"/>
        </mxCell>
        
        <!-- Git Workflow -->
        <mxCell id="branch-strategy" value="🌿 Branch Strategy&#xa;• main branch (production)&#xa;• develop branch (integration)&#xa;• feature/* branches&#xa;• hotfix/* branches&#xa;• Git flow methodology" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#BBDEFB;strokeColor=#1565C0;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="120" y="310" width="180" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="pull-requests" value="🔄 Pull Request Process&#xa;• Feature branch to develop&#xa;• Code review requirements&#xa;• CI status checks&#xa;• Merge approval process&#xa;• Automated testing" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#BBDEFB;strokeColor=#1565C0;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="320" y="310" width="180" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="code-review" value="👥 Code Review&#xa;• Peer review process&#xa;• Security validation&#xa;• Architecture review&#xa;• Performance analysis&#xa;• Knowledge sharing" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#BBDEFB;strokeColor=#1565C0;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="520" y="310" width="180" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="merge-strategy" value="🔀 Merge Strategy&#xa;• Squash and merge&#xa;• Linear history&#xa;• Automated merging&#xa;• Conflict resolution&#xa;• Branch cleanup" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#BBDEFB;strokeColor=#1565C0;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="720" y="310" width="180" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="release-tagging" value="🏷️ Release Management&#xa;• Semantic versioning&#xa;• Release tags&#xa;• Changelog generation&#xa;• Release notes&#xa;• Asset management" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#BBDEFB;strokeColor=#1565C0;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="920" y="310" width="180" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="backup-strategy" value="💾 Backup Strategy&#xa;• Repository mirroring&#xa;• Distributed backups&#xa;• Recovery procedures&#xa;• Data integrity&#xa;• Access controls" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#BBDEFB;strokeColor=#1565C0;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="1120" y="310" width="180" height="80" as="geometry"/>
        </mxCell>
        
        <!-- CI/CD Pipeline Phase -->
        <mxCell id="cicd-pipeline-container" value="" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFF3E0;strokeColor=#FF9800;strokeWidth=2;" vertex="1" parent="1">
          <mxGeometry x="80" y="420" width="1240" height="160" as="geometry"/>
        </mxCell>
        <mxCell id="cicd-pipeline-label" value="CI/CD PIPELINE AUTOMATION" style="text;html=1;strokeColor=none;fillColor=#FF9800;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=1;fontSize=14;fontStyle=1;fontColor=#ffffff;" vertex="1" parent="1">
          <mxGeometry x="600" y="430" width="240" height="30" as="geometry"/>
        </mxCell>
        
        <!-- CI/CD Steps -->
        <mxCell id="trigger-events" value="🔔 Trigger Events&#xa;• Push to main/develop&#xa;• Pull request creation&#xa;• Manual dispatch&#xa;• Scheduled runs&#xa;• Release tags" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFE0B2;strokeColor=#FB8C00;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="120" y="470" width="140" height="100" as="geometry"/>
        </mxCell>
        
        <mxCell id="automated-testing" value="🧪 Automated Testing&#xa;• Unit test execution&#xa;• Integration testing&#xa;• API endpoint testing&#xa;• Coverage reporting&#xa;• Performance testing" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFE0B2;strokeColor=#FB8C00;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="280" y="470" width="140" height="100" as="geometry"/>
        </mxCell>
        
        <mxCell id="quality-gates" value="✅ Quality Gates&#xa;• ESLint validation&#xa;• Test pass requirements&#xa;• Coverage thresholds&#xa;• Security scans&#xa;• Build success" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFE0B2;strokeColor=#FB8C00;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="440" y="470" width="140" height="100" as="geometry"/>
        </mxCell>
        
        <mxCell id="security-scanning" value="🛡️ Security Scanning&#xa;• npm audit execution&#xa;• Vulnerability detection&#xa;• Dependency analysis&#xa;• License compliance&#xa;• Supply chain security" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFE0B2;strokeColor=#FB8C00;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="600" y="470" width="140" height="100" as="geometry"/>
        </mxCell>
        
        <mxCell id="build-process" value="🏗️ Build Process&#xa;• Docker image build&#xa;• Multi-stage optimization&#xa;• Layer caching&#xa;• Image tagging&#xa;• Registry push" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFE0B2;strokeColor=#FB8C00;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="760" y="470" width="140" height="100" as="geometry"/>
        </mxCell>
        
        <mxCell id="artifact-management" value="📦 Artifact Management&#xa;• Image versioning&#xa;• Metadata storage&#xa;• Test reports&#xa;• Build logs&#xa;• Documentation" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFE0B2;strokeColor=#FB8C00;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="920" y="470" width="140" height="100" as="geometry"/>
        </mxCell>
        
        <mxCell id="notification-system" value="📢 Notifications&#xa;• Build status updates&#xa;• Test results&#xa;• Security alerts&#xa;• Deployment status&#xa;• Team communication" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFE0B2;strokeColor=#FB8C00;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="1080" y="470" width="140" height="100" as="geometry"/>
        </mxCell>
        
        <!-- Deployment & Release -->
        <mxCell id="deployment-container" value="" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#F3E5F5;strokeColor=#9C27B0;strokeWidth=2;" vertex="1" parent="1">
          <mxGeometry x="80" y="600" width="1240" height="160" as="geometry"/>
        </mxCell>
        <mxCell id="deployment-label" value="DEPLOYMENT &amp; RELEASE MANAGEMENT" style="text;html=1;strokeColor=none;fillColor=#9C27B0;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=1;fontSize=14;fontStyle=1;fontColor=#ffffff;" vertex="1" parent="1">
          <mxGeometry x="580" y="610" width="280" height="30" as="geometry"/>
        </mxCell>
        
        <!-- Deployment Steps -->
        <mxCell id="environment-prep" value="🌍 Environment Preparation&#xa;• Infrastructure setup&#xa;• Service configuration&#xa;• Resource allocation&#xa;• Network configuration&#xa;• Security setup" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E1BEE7;strokeColor=#8E24AA;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="120" y="650" width="140" height="100" as="geometry"/>
        </mxCell>
        
        <mxCell id="dev-deployment" value="🟢 Development Deploy&#xa;• Auto-deployment&#xa;• Development config&#xa;• Real-time updates&#xa;• Feature testing&#xa;• Immediate feedback" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E1BEE7;strokeColor=#8E24AA;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="280" y="650" width="140" height="100" as="geometry"/>
        </mxCell>
        
        <mxCell id="test-deployment" value="🟡 Testing Deploy&#xa;• Manual deployment&#xa;• QA environment&#xa;• User acceptance testing&#xa;• Performance testing&#xa;• Pre-production validation" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E1BEE7;strokeColor=#8E24AA;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="440" y="650" width="140" height="100" as="geometry"/>
        </mxCell>
        
        <mxCell id="prod-deployment" value="🔴 Production Deploy&#xa;• Manual approval&#xa;• Production config&#xa;• Blue-green strategy&#xa;• Rollback capability&#xa;• Monitoring setup" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E1BEE7;strokeColor=#8E24AA;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="600" y="650" width="140" height="100" as="geometry"/>
        </mxCell>
        
        <mxCell id="health-validation" value="💚 Health Validation&#xa;• Service health checks&#xa;• Endpoint testing&#xa;• Performance validation&#xa;• Error monitoring&#xa;• User impact assessment" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E1BEE7;strokeColor=#8E24AA;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="760" y="650" width="140" height="100" as="geometry"/>
        </mxCell>
        
        <mxCell id="rollback-procedures" value="🔄 Rollback Procedures&#xa;• Automatic rollback&#xa;• Manual intervention&#xa;• Data consistency&#xa;• Service restoration&#xa;• Issue documentation" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E1BEE7;strokeColor=#8E24AA;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="920" y="650" width="140" height="100" as="geometry"/>
        </mxCell>
        
        <mxCell id="post-deployment" value="📊 Post-Deployment&#xa;• Monitoring setup&#xa;• Performance tracking&#xa;• User feedback&#xa;• Issue tracking&#xa;• Success metrics" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#E1BEE7;strokeColor=#8E24AA;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="1080" y="650" width="140" height="100" as="geometry"/>
        </mxCell>
        
        <!-- Monitoring & Feedback -->
        <mxCell id="monitoring-feedback-container" value="" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFEBEE;strokeColor=#F44336;strokeWidth=2;" vertex="1" parent="1">
          <mxGeometry x="80" y="780" width="1240" height="140" as="geometry"/>
        </mxCell>
        <mxCell id="monitoring-feedback-label" value="MONITORING, FEEDBACK &amp; CONTINUOUS IMPROVEMENT" style="text;html=1;strokeColor=none;fillColor=#F44336;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=1;fontSize=14;fontStyle=1;fontColor=#ffffff;" vertex="1" parent="1">
          <mxGeometry x="540" y="790" width="360" height="30" as="geometry"/>
        </mxCell>
        
        <!-- Monitoring Components -->
        <mxCell id="performance-monitoring" value="📈 Performance Monitoring&#xa;• Response time tracking&#xa;• Resource utilization&#xa;• Error rate monitoring&#xa;• Availability metrics&#xa;• Capacity planning" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFCDD2;strokeColor=#E57373;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="120" y="830" width="180" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="user-feedback" value="👥 User Feedback&#xa;• Feature usage analytics&#xa;• User experience metrics&#xa;• Bug reports&#xa;• Enhancement requests&#xa;• Satisfaction surveys" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFCDD2;strokeColor=#E57373;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="320" y="830" width="180" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="metrics-analytics" value="📊 Metrics &amp; Analytics&#xa;• Deployment frequency&#xa;• Lead time measurement&#xa;• Change failure rate&#xa;• Recovery time&#xa;• Team productivity" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFCDD2;strokeColor=#E57373;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="520" y="830" width="180" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="continuous-improvement" value="🔄 Continuous Improvement&#xa;• Process optimization&#xa;• Tool evaluation&#xa;• Team retrospectives&#xa;• Best practice adoption&#xa;• Knowledge sharing" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFCDD2;strokeColor=#E57373;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="720" y="830" width="180" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="documentation-update" value="📚 Documentation Update&#xa;• Process documentation&#xa;• Architecture updates&#xa;• Runbook maintenance&#xa;• Training materials&#xa;• Knowledge base" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFCDD2;strokeColor=#E57373;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="920" y="830" width="180" height="80" as="geometry"/>
        </mxCell>
        
        <mxCell id="capacity-planning" value="📋 Capacity Planning&#xa;• Resource forecasting&#xa;• Scaling strategies&#xa;• Cost optimization&#xa;• Performance planning&#xa;• Infrastructure roadmap" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFCDD2;strokeColor=#E57373;fontStyle=1;fontSize=10;align=left;" vertex="1" parent="1">
          <mxGeometry x="1120" y="830" width="180" height="80" as="geometry"/>
        </mxCell>
        
        <!-- Workflow Connections -->
        <mxCell id="local-to-git" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeWidth=2;strokeColor=#4CAF50;" edge="1" parent="1" source="git-preparation" target="branch-strategy">
          <mxGeometry relative="1" as="geometry">
            <Array as="points">
              <mxPoint x="1150" y="250" />
              <mxPoint x="210" y="250" />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id="local-git-label" value="commits to" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];fontSize=10;fontStyle=1;fontColor=#4CAF50;" vertex="1" connectable="0" parent="local-to-git">
          <mxGeometry x="-0.1" y="1" relative="1" as="geometry"/>
        </mxCell>
        
        <mxCell id="git-to-cicd" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeWidth=2;strokeColor=#1976D2;" edge="1" parent="1" source="pull-requests" target="trigger-events">
          <mxGeometry relative="1" as="geometry">
            <Array as="points">
              <mxPoint x="410" y="410" />
              <mxPoint x="190" y="410" />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id="git-cicd-label" value="triggers" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];fontSize=10;fontStyle=1;fontColor=#1976D2;" vertex="1" connectable="0" parent="git-to-cicd">
          <mxGeometry x="-0.1" y="1" relative="1" as="geometry"/>
        </mxCell>
        
        <mxCell id="cicd-to-deploy" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeWidth=2;strokeColor=#FF9800;" edge="1" parent="1" source="build-process" target="dev-deployment">
          <mxGeometry relative="1" as="geometry">
            <Array as="points">
              <mxPoint x="830" y="590" />
              <mxPoint x="350" y="590" />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id="cicd-deploy-label" value="deploys to" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];fontSize=10;fontStyle=1;fontColor=#FF9800;" vertex="1" connectable="0" parent="cicd-to-deploy">
          <mxGeometry x="-0.1" y="1" relative="1" as="geometry"/>
        </mxCell>
        
        <mxCell id="deploy-to-monitor" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeWidth=2;strokeColor=#9C27B0;" edge="1" parent="1" source="post-deployment" target="performance-monitoring">
          <mxGeometry relative="1" as="geometry">
            <Array as="points">
              <mxPoint x="1150" y="770" />
              <mxPoint x="210" y="770" />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id="deploy-monitor-label" value="enables" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];fontSize=10;fontStyle=1;fontColor=#9C27B0;" vertex="1" connectable="0" parent="deploy-to-monitor">
          <mxGeometry x="-0.1" y="1" relative="1" as="geometry"/>
        </mxCell>
        
        <!-- Feedback Loop -->
        <mxCell id="feedback-loop" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeWidth=3;strokeColor=#F44336;dashed=1;" edge="1" parent="1" source="continuous-improvement" target="feature-planning">
          <mxGeometry relative="1" as="geometry">
            <Array as="points">
              <mxPoint x="810" y="950" />
              <mxPoint x="60" y="950" />
              <mxPoint x="60" y="170" />
              <mxPoint x="190" y="170" />
            </Array>
          </mxGeometry>
        </mxCell>
        <mxCell id="feedback-loop-label" value="feedback drives new development" style="edgeLabel;html=1;align=center;verticalAlign=middle;resizable=0;points=[];fontSize=10;fontStyle=1;fontColor=#F44336;" vertex="1" connectable="0" parent="feedback-loop">
          <mxGeometry x="-0.1" y="1" relative="1" as="geometry"/>
        </mxCell>
        
        <!-- Process Flow Arrows -->
        <mxCell id="flow-1" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeWidth=2;strokeColor=#4CAF50;" edge="1" parent="1" source="feature-planning" target="local-setup">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>
        
        <mxCell id="flow-2" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeWidth=2;strokeColor=#4CAF50;" edge="1" parent="1" source="local-setup" target="feature-development">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>
        
        <mxCell id="flow-3" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeWidth=2;strokeColor=#4CAF50;" edge="1" parent="1" source="feature-development" target="local-testing">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>
        
        <mxCell id="flow-4" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeWidth=2;strokeColor=#4CAF50;" edge="1" parent="1" source="local-testing" target="code-quality">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>
        
        <mxCell id="flow-5" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeWidth=2;strokeColor=#4CAF50;" edge="1" parent="1" source="code-quality" target="docker-testing">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>
        
        <mxCell id="flow-6" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeWidth=2;strokeColor=#4CAF50;" edge="1" parent="1" source="docker-testing" target="git-preparation">
          <mxGeometry relative="1" as="geometry"/>
        </mxCell>
        
        <!-- Summary -->
        <mxCell id="summary-container" value="" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#FFF9C4;strokeColor=#F9A825;strokeWidth=2;" vertex="1" parent="1">
          <mxGeometry x="80" y="940" width="1240" height="100" as="geometry"/>
        </mxCell>
        <mxCell id="summary-text" value="📋 DEVELOPMENT WORKFLOW OVERVIEW: Development-to-production workflow with quality gates and feedback loops&#xa;• Local development with testing and quality checks • Git-based collaboration with code review and branch protection&#xa;• Automated CI/CD pipeline with 6 workflows and security scanning • Multi-environment deployment with health validation and rollback capabilities&#xa;• Continuous monitoring and feedback for improvement • DevOps practices with metrics tracking and capacity planning&#xa;• Feedback loop from production monitoring back to feature planning for continuous improvement" style="text;html=1;strokeColor=none;fillColor=#FFF9C4;align=left;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=11;fontStyle=0;fontColor=#F57F17;" vertex="1" parent="1">
          <mxGeometry x="100" y="950" width="1200" height="80" as="geometry"/>
        </mxCell>
        
      </root>
    </mxGraphModel>
  </diagram>
</mxfile>