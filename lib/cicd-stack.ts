import * as cdk from 'aws-cdk-lib';
import * as pipelines from 'aws-cdk-lib/pipelines';
import { Construct } from 'constructs';

export class CICDStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const _staging = new pipelines.CodePipeline(this, 'StagingPipeline', {
      synth: new pipelines.ShellStep('Synth', {
        input: pipelines.CodePipelineSource.connection('ryanmalesic/my-campus', 'staging', {
          connectionArn:
            'arn:aws:codeconnections:us-west-2:590183867242:connection/fdeb4055-b75b-4584-af2d-3e866e9421d8',
        }),
        commands: ['CI=true npm ci', 'npm run build', 'npx cdk synth'],
      }),
    });

    const _main = new pipelines.CodePipeline(this, 'MainPipeline', {
      synth: new pipelines.ShellStep('Synth', {
        input: pipelines.CodePipelineSource.connection('ryanmalesic/my-campus', 'main', {
          connectionArn:
            'arn:aws:codeconnections:us-west-2:590183867242:connection/fdeb4055-b75b-4584-af2d-3e866e9421d8',
        }),
        commands: ['CI=true npm ci', 'npm run build', 'npx cdk synth'],
      }),
    });
  }
}
