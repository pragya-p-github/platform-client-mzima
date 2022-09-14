import { FormAttributeInterface } from './forms.interface';

export interface SurveyApiResponse {
  results: SurveyItem[];
}

export interface SurveyItem {
  can_create: any[];
  color: string;
  description: string;
  disabled: boolean;
  enabled_languages: SurveyItemEnabledLanguages;
  everyone_can_create: boolean;
  hide_author: boolean;
  hide_location: boolean;
  hide_time: boolean;
  id: number;
  name: string;
  require_approval: boolean;
  targeted_survey: boolean;
  tasks: SurveyItemTask[];
  translations: any[];
  type: string;
}

export interface SurveyItemEnabledLanguages {
  available: any[];
  default: string;
}

export interface SurveyItemTask {
  description: string;
  fields: FormAttributeInterface[];
  form_id: number;
  id: number;
  label: string;
  priority: number;
  required: boolean;
  show_when_published: boolean;
  task_is_internal_only: boolean;
  translations: any[];
  type: string;
}