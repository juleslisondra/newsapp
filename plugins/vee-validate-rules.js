import { defineRule } from 'vee-validate';
import * as AllRules from '@vee-validate/rules';
Object.keys(AllRules).forEach(rule => {
  defineRule(rule, AllRules[rule]);
});