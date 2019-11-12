/**
 * @typedef {Object} plannerTask INCOMPLETE!
 * @property {number} activeChecklistItemCount Number of checklist items with value set to false, representing incomplete items.
 * @property {plannerAppliedCategories} appliedCategories	The categories to which the task has been applied. See applied Categories for possible values.
 * @property {String} assigneePriority Hint used to order items of this type in a list view. The format is defined as outlined here.
 * @property {plannerAssignments} assignments	The set of assignees the task is assigned to.
 * @property {String} bucketId Bucket ID to which the task belongs. The bucket needs to be in the plan that the task is in. It is 28 characters long and case-sensitive. Format validation is done on the service.
 * @property {number} checklistItemCount Number of checklist items that are present on the task.
 * @property {IdentitySet} completedBy Identity of the user that completed the task.
 * @property {String} completedDateTime	Read-only. Date and time at which the 'percentComplete' of the task is set to '100'. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z'
 * @property {String} conversationThreadId Thread ID of the conversation on the task. This is the ID of the conversation thread object created in the group.
 * @property {IdentitySet} createdBy	Identity of the user that created the task.
 * @property {String} createdDateTime	Read-only. Date and time at which the task is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z'
 * @property {String} dueDateTime	Date and time at which the task is due. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z'
 * @property {boolean} hasDescription	Read-only. Value is true if the details object of the task has a non-empty description and false otherwise.
 * @property {String} id Read-only. ID of the task. It is 28 characters long and case-sensitive. Format validation is done on the service.
 * @property {String} orderHint	Hint used to order items of this type in a list view. The format is defined as outlined here.
 * @property {number} percentComplete	Percentage of task completion. When set to 100, the task is considered completed.
 * @property {String} planId Plan ID to which the task belongs.
 * @property {String} previewType	This sets the type of preview that shows up on the task. The possible values are: automatic, noPreview, checklist, description, reference.
 * @property {number} referenceCount Number of external references that exist on the task.
 * @property {String} startDateTime	Date and time at which the task starts. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z'
 * @property {String} title	Title of the task.
 */

/**
 * @typedef {Object} plannerAppliedCategories
 * @property {boolean} category1
 * @property {boolean} category2
 * @property {boolean} category3
 * @property {boolean} category4
 * @property {boolean} category5
 * @property {boolean} category6
 */

/**
 * @typedef {Object} plannerAssignments
 * see https://docs.microsoft.com/en-us/graph/api/resources/plannerassignments?view=graph-rest-1.0
 */

/**
 * @typedef {Object} IdentitySet
 * @property {Identity} application Optional. The application associated with this action.
 * @property {Identity} device Optional. The device associated with this action.
 * @property {Identity} user Optional. The user associated with this action.
 */

/**
 * @typedef {Object} Identity
 * @property {String} displayName The identity's display name. Note that this may not always be available or up to date. For example, if a user changes their display name, the API may show the new value in a future response, but the items associated with the user won't show up as having changed when using [delta](https://docs.microsoft.com/en-us/graph/api/driveitem-delta?view=graph-rest-1.0&tabs=http).
 * @property {String} id Unique identifier for the identity.
 */
