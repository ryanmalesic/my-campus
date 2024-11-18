#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';

import { CICDStack } from '../lib/cicd-stack';

const app = new cdk.App();

new CICDStack(app, 'MyCampus-CICD', {
  env: {
    account: '590183867242',
    region: 'us-west-2',
  },
});

app.synth();
