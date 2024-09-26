import type { Field } from 'payload'

const currentDateTime = new Date()

export const publishOnField: Field = {
  name: 'publishOn',
  label: 'Publish On',
  type: 'date',
  admin: {
    position: 'sidebar',
    date: {
      pickerAppearance: 'dayAndTime',
      minDate: currentDateTime,
      timeIntervals: 1,
    },
    components: {
      Field:
        '/src/plugins/schedule-doc-publish/fields/PublishOn/components/CustomPublishOnField.tsx',
    },
  },
}
