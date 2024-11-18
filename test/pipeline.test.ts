import * as cdk from 'aws-cdk-lib';
import { CICDStack } from '../lib/cicd-stack';
import { Template } from 'aws-cdk-lib/assertions';

test('Pipeline Created', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new CICDStack(app, 'MyTestStack');
  // THEN
  const template = Template.fromStack(stack);
  template.hasResourceProperties('AWS::CodePipeline::Pipeline', {
    PipelineType: 'V1',
  });
});
