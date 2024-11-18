import * as cdk from 'aws-cdk-lib';
import { Function, InlineCode, Runtime } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

export class AuthStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new Function(this, 'LambdaFunction', {
      runtime: Runtime.NODEJS_20_X,
      handler: 'index.handler',
      code: new InlineCode('exports.handler = _ => "Hello, CDK";'),
    });
  }
}
