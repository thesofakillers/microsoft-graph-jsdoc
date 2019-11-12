/**
 * @typedef {Object} plannerTask
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

/**
 * @typedef {Object} plannerTaskDetails
 * @property {plannerChecklistItems} checklist The collection of checklist items on the task.
 * @property {String} description Description of the task.
 * @property {String} id Read-only. ID of the task details. It is 28 characters long and case-sensitive. Format validation is done on the service.
 * @property {String} previewType This sets the type of preview that shows up on the task. The possible values are: automatic, noPreview, checklist, description, reference. When set to automatic the displayed preview is chosen by the app viewing the task.
 * @property {plannerExternalReferences} references
 */

/**
 * @typedef {Object} plannerChecklistItems
 * see https://docs.microsoft.com/en-us/graph/api/resources/plannerchecklistitems?view=graph-rest-1.0
 */

/**
 * @typedef {Object} plannerExternalReferences
 * see https://docs.microsoft.com/en-us/graph/api/resources/plannerexternalreferences?view=graph-rest-1.0
 */

/**
 * @typedef {Object} plannerBucket
 * @property {String} id Read-only. ID of the bucket. It is 28 characters long and case-sensitive. Format validation is done on the service.
 * @property {String} name Name of the bucket.
 * @property {String} orderHint Hint used to order items of this type in a list view. The format is defined as outlined here.
 * @property {String} planId Plan ID to which the bucket belongs.
 */

/**
 * @typedef {Object} plannerPlan
 * @property {String} createdDateTime Read-only. Date and time at which the plan is created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z'
 * @property {String} id Read-only. ID of the plan. It is 28 characters long and case-sensitive. Format validation is done on the service.
 * @property {String} owner ID of the Group that owns the plan. A valid group must exist before this field can be set. After it is set, this property can’t be updated.
 * @property {String} title Required. Title of the plan.
 * @property {IdentitySet} createdBy Read-only. The user who created the plan.
 */

/**
 * @typedef {directoryObject} user
 * @property {String} aboutMe A freeform text entry field for the user to describe themselves.
 * @property {boolean} accountEnabled true if the account is enabled; otherwise, false. This property is required when a user is created. Supports $filter.
 * @property {String} ageGroup Sets the age group of the user. Allowed values: null, minor, notAdult and adult. Refer to the legal age group property definitions for further information
 * @property {Array<assignedLicense>} assignedLicenses The licenses that are assigned to the user. Not nullable.
 * @property {Array<assignedPlan>} assignedPlans The plans that are assigned to the user. Read-only. Not nullable.
 * @property {String} birthday The birthday of the user. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z'
 * @property {Array<String>} businessPhones The telephone numbers for the user. NOTE: Although this is a string collection, only one number can be set for this property.
 * @property {String} city The city in which the user is located. Supports $filter.
 * @property {String} companyName The company name which the user is associated. This property can be useful for describing the company that an external user comes from.
 * @property {String} consentProvidedForMinor Sets whether consent has been obtained for minors. Allowed values: null, granted, denied and notRequired. Refer to the legal age group property definitions for further information.
 * @property {String} country The country/region in which the user is located; for example, “US” or “UK”. Supports $filter.
 * @property {String} createdDateTime The created date of the user object.
 * @property {String} department The name for the department in which the user works. Supports $filter.
 * @property {String} displayName The name displayed in the address book for the user. This is usually the combination of the user's first name, middle initial and last name. This property is required when a user is created and it cannot be cleared during updates. Supports $filter and $orderby.
 * @property {String} employeeId The employee identifier assigned to the user by the organization. Supports $filter.
 * @property {String} faxNumber The fax number of the user.
 * @property {String} givenName The given name (first name) of the user. Supports $filter.
 * @property {String} hireDate The hire date of the user. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z'
 * @property {String} id The unique identifier for the user. Inherited from directoryObject. Key. Not nullable. Read-only.
 * @property {Array<String>} imAddresses The instant message voice over IP (VOIP) session initiation protocol (SIP) addresses for the user. Read-only.
 * @property {Array<String>} interests A list for the user to describe their interests.
 * @property {boolean} isResourceAccount true if the user is a resource account; otherwise, false. Null value should be considered false.
 * @property {String} jobTitle The user’s job title. Supports $filter.
 * @property {String} lastPasswordChangeDateTime The time when this Azure AD user last changed their password. The date and time information uses ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z'
 * @property {String} legalAgeGroupClassification Used by enterprise applications to determine the legal age group of the user. This property is read-only and calculated based on ageGroup and consentProvidedForMinor properties. Allowed values: null, minorWithOutParentalConsent, minorWithParentalConsent, minorNoParentalConsentRequired, notAdult and adult. Refer to the legal age group property definitions for further information.)
 * @property {Array<licenseAssignmentState>} licenseAssignmentStates State of license assignments for this user. Read-only.
 * @property {String} mail 	The SMTP address for the user, for example, "jeff@contoso.onmicrosoft.com". Read-Only. Supports $filter.
 * @property {mailboxSettings} mailboxSettings Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale and time zone.
 * @property {String} mailNickname The mail alias for the user. This property must be specified when a user is created. Supports $filter.
 * @property {String} mobilePhone The primary cellular telephone number for the user.
 * @property {String} mySite The URL for the user's personal site.
 * @property {String} officeLocation The office location in the user's place of business.
 * @property {String} onPremisesDistinguishedName Contains the on-premises Active Directory distinguished name or DN. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect. Read-only.
 * @property {String} onPremisesDomainName Contains the on-premises domainFQDN, also called dnsDomainName synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect. Read-only.
 * @property {onPremisesExtensionAttributes} onPremisesExtensionAttributes Contains extensionAttributes 1-15 for the user. Note that the individual extension attributes are neither selectable nor filterable. For an onPremisesSyncEnabled user, this set of properties is mastered on-premises and is read-only. For a cloud-only user (where onPremisesSyncEnabled is false), these properties may be set during creation or update.
 * @property {String} onPremisesImmutableId This property is used to associate an on-premises Active Directory user account to their Azure AD user object. This property must be specified when creating a new user account in the Graph if you are using a federated domain for the user’s userPrincipalName (UPN) property. Important: The $ and _ characters cannot be used when specifying this property. Supports $filter.
 * @property {String} onPremisesLastSyncDateTime Indicates the last time at which the object was synced with the on-premises directory; for example: "2013-02-16T03:04:54Z". The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z'. Read-only.
 * @property {Array<onPremisesProvisioningError>} onPremisesProvisioningErrors Errors when using Microsoft synchronization product during provisioning.
 * @property {String} onPremisesSamAccountName Contains the on-premises samAccountName synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect. Read-only.
 * @property {String} onPremisesSecurityIdentifier Contains the on-premises security identifier (SID) for the user that was synchronized from on-premises to the cloud. Read-only.
 * @property {boolean} onPremisesSyncEnabled true if this object is synced from an on-premises directory; false if this object was originally synced from an on-premises directory but is no longer synced; null if this object has never been synced from an on-premises directory (default). Read-only
 * @property {String} onPremisesUserPrincipalName Contains the on-premises userPrincipalName synchronized from the on-premises directory. The property is only populated for customers who are synchronizing their on-premises directory to Azure Active Directory via Azure AD Connect. Read-only.
 * @property {Array<String>} otherMails A list of additional email addresses for the user; for example: ["bob@contoso.com", "Robert@fabrikam.com"]. Supports $filter.
 * @property {String} passwordPolicies Specifies password policies for the user. This value is an enumeration with one possible value being “DisableStrongPassword”, which allows weaker passwords than the default policy to be specified. “DisablePasswordExpiration” can also be specified. The two may be specified together; for example: "DisablePasswordExpiration, DisableStrongPassword".
 * @property {passwordProfile} passwordProfile Specifies the password profile for the user. The profile contains the user’s password. This property is required when a user is created. The password in the profile must satisfy minimum requirements as specified by the passwordPolicies property. By default, a strong password is required.
 * @property {String} postalCode The postal code for the user's postal address. The postal code is specific to the user's country/region. In the United States of America, this attribute contains the ZIP code.
 * @property {String} preferredDataLocation The preferred data location for the user. For more information, see OneDrive Online Multi-Geo.
 * @property {String} preferredLanguage The preferred language for the user. Should follow ISO 639-1 Code; for example "en-US".
 * @property {String} preferredName The preferred name for the user.
 * @property {Array<provisionedPlan>} provisionedPlans The plans that are provisioned for the user. Read-only. Not nullable.
 * @property {Array<String>} proxyAddresses For example: ["SMTP: bob@contoso.com", "smtp: bob@sales.contoso.com"] The any operator is required for filter expressions on multi-valued properties. Read-only, Not nullable. Supports $filter.
 * @property {Array<String>} responsibilities A list for the user to enumerate their responsibilities.
 * @property {Array<String>} schools A list for the user to enumerate the schools they have attended.
 * @property {boolean} showInAddressList true if the Outlook global address list should contain this user, otherwise false. If not set, this will be treated as true. For users invited through the invitation manager, this property will be set to false.
 * @property {Array<String>} skills A list for the user to enumerate their skills.
 * @property {String} signInSessionsValidFromDateTime Any refresh tokens or sessions tokens (session cookies) issued before this time are invalid, and applications will get an error when using an invalid refresh or sessions token to acquire a delegated access token (to access APIs such as Microsoft Graph). If this happens, the application will need to acquire a new refresh token by making a request to the authorize endpoint. Read-only. Use revokeSignInSessions to reset.
 * @property {String} state The state or province in the user's address. Supports $filter.
 * @property {String} streetAddress The street address of the user's place of business.
 * @property {String} surname The user's surname (family name or last name). Supports $filter.
 * @property {String} usageLocation A two letter country code (ISO standard 3166). Required for users that will be assigned licenses due to legal requirement to check for availability of services in countries. Examples include: "US", "JP", and "GB". Not nullable. Supports $filter.
 * @property {String} userPrincipalName The user principal name (UPN) of the user. The UPN is an Internet-style login name for the user based on the Internet standard RFC 822. By convention, this should map to the user's email name. The general format is alias@domain, where domain must be present in the tenant’s collection of verified domains. This property is required when a user is created. The verified domains for the tenant can be accessed from the verifiedDomains property of organization. Supports $filter and $orderby.
 * @property {String} userType A string value that can be used to classify user types in your directory, such as “Member” and “Guest”. Supports $filter.
 */

/**
 * @typedef {Object} directoryObject
 * @property {String} id A Guid that is the unique identifier for the object; for example, 12345678-9abc-def0-1234-56789abcde. Key. Not nullable. Read-only.
 */

/**
 * @typedef {Object} assignedLicense
 * @property {Array<String>} disabledPlans A collection of the unique identifiers for plans that have been disabled.
 * @property {String} skuId The unique identifier for the SKU.
 */

/**
 * @typedef {Object} assignedPlan
 * @property {String} assignedDateTime The date and time at which the plan was assigned; for example: 2013-01-02T19:32:30Z. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 would look like this: '2014-01-01T00:00:00Z'
 * @property {String} capabilityStatus For example, “Enabled”.
 * @property {String} service The name of the service; for example, “Exchange”.
 * @property {String} servicePlanId A GUID that identifies the service plan.
 */

/**
 * @typedef {Object} licenseAssignmentState
 * @property {String} assignedByGroup The id of the group that assigns this license. If the assignment is a direct-assigned license, this field will be Null. Read-Only.
 * @property {Array<String>} disabledPlans The service plans that are disabled in this assignment. Read-Only.
 * @property {String} error License assignment failure error. If the license is assigned successfully, this field will be Null. Read-Only. Possible values: CountViolation, MutuallyExclusiveViolation, DependencyViolation, ProhibitedInUsageLocationViolation, UniquenessViolation, and Others. For more information on how to identify and resolve license assignment errors see here.
 * @property {String} skuId The unique identifier for the SKU. Read-Only.
 * @property {String} state Indicate the current state of this assignment. Read-Only. Possible values: Active, ActiveWithError, Disabled and Error.
 */

/**
 * @typedef {Object} mailboxSettings
 * @property {String} archiveFolder Folder ID of an archive folder for the user.
 * @property {automaticRepliesSetting} automaticRepliesSetting Configuration settings to automatically notify the sender of an incoming email with a message from the signed-in user.
 * @property {String} dateFormat The date format for the user's mailbox.
 * @property {localeinfo} language The locale information for the user, including the preferred language and country/region.
 * @property {String} timeFormat The time format for the user's mailbox.
 * @property {String} timeZone The default time zone for the user's mailbox.
 * @property {workingHours} workingHours The days of the week and hours in a specific time zone that the user works.
 */

/**
 * @typedef {Object} automaticRepliesSetting
 * @property {String} externalAudience The set of audience external to the signed-in user's organization who will receive the ExternalReplyMessage, if Status is AlwaysEnabled or Scheduled. The possible values are: none, contactsOnly, all.
 * @property {String} externalReplyMessage The automatic reply to send to the specified external audience, if Status is AlwaysEnabled or Scheduled.
 * @property {String} internalReplyMessage The automatic reply to send to the audience internal to the signed-in user's organization, if Status is AlwaysEnabled or Scheduled
 * @property {dateTimeTimeZone} scheduledEndDateTime The date and time that automatic replies are set to end, if Status is set to Scheduled.
 * @property {dateTimeTimeZone} scheduledStartDateTime The date and time that automatic replies are set to begin, if Status is set to Scheduled.
 * @property {String} status Configurations status for automatic replies. The possible values are: disabled, alwaysEnabled, scheduled.
 */

/**
 * @typedef {Object} dateTimeTimeZone
 * @property {String} dateTime A single point of time in a combined date and time representation ({date}T{time}; for example, 2017-08-29T04:00:00.0000000).
 * @property {String} timeZone Represents a time zone, for example, "Pacific Standard Time". See below for more possible values.
 */

/**
 * @typedef {Object} localeinfo
 * @property {String} locale A locale representation for the user, which includes the user's preferred language and country/region. For example, "en-us". The language component follows 2-letter codes as defined in ISO 639-1, and the country component follows 2-letter codes as defined in ISO 3166-1 alpha-2.
 * @property {String} displayName A name representing the user's locale in natural language, for example, "English (United States)
 */

/**
 * @typedef {Object} workingHours
 * @property {Array<String>} daysOfWeek The days of the week on which the user works.
 * @property {String} startTime The time of the day that the user starts working.
 * @property {String} endTime The time of the day that the user stops working.
 * @property {timeZoneBase} timeZone The time zone to which the working hours apply.
 */

/**
 * @typedef {Object} timeZoneBase
 * @property {String} name The name of a time zone. It can be a standard time zone name such as "Hawaii-Aleutian Standard Time", or "Customized Time Zone" for a custom time zone.
 */

/**
 * @typedef {Object} onPremisesExtensionAttributes
 * @property {String} extensionAttribute1 First customizable extension attribute.
 * @property {String} extensionAttribute2 Second customizable extension attribute.
 * @property {String} extensionAttribute3 Third customizable extension attribute.
 * @property {String} extensionAttribute4 Fourth customizable extension attribute.
 * @property {String} extensionAttribute5 Fifth customizable extension attribute.
 * @property {String} extensionAttribute6 Sixth customizable extension attribute.
 * @property {String} extensionAttribute7 Seventh customizable extension attribute.
 * @property {String} extensionAttribute8 Eighth customizable extension attribute.
 * @property {String} extensionAttribute9 Ninth customizable extension attribute.
 * @property {String} extensionAttribute10 Tenth customizable extension attribute.
 * @property {String} extensionAttribute11 Eleventh customizable extension attribute.
 * @property {String} extensionAttribute12 Twelfth customizable extension attribute.
 * @property {String} extensionAttribute13 Thirteenth customizable extension attribute.
 * @property {String} extensionAttribute14 Fourteenth customizable extension attribute.
 * @property {String} extensionAttribute15 Fifteenth customizable extension attribute.
 */

/**
 * @typedef {Object} onPremisesProvisioningError
 * @property {String} category Category of the provisioning error. Note: Currently, there is only one possible value. Possible value: PropertyConflict - indicates a property value is not unique. Other objects contain the same value for the property.
 * @property {String} occurredDateTime The date and time at which the error occurred.
 * @property {String} propertyCausingError Name of the directory property causing the error. Current possible values: UserPrincipalName or ProxyAddress
 * @property {String} value Value of the property causing the error.
 */

/**
 * @typedef {Object} passwordProfile
 * @property {boolean} forceChangePasswordNextSignIn true if the user must change her password on the next login; otherwise false.
 * @property {boolean} forceChangePasswordNextSignInWithMfa If true, at next sign-in, the user must perform a multi-factor authentication (MFA) before being forced to change their password. The behavior is identical to forceChangePasswordNextSignIn except that the user is required to first perform a multi-factor authentication before password change. After a password change, this property will be automatically reset to false. If not set, default is false.
 * @property {String} password The password for the user. This property is required when a user is created. It can be updated, but the user will be required to change the password on the next login. The password must satisfy minimum requirements as specified by the user’s passwordPolicies property. By default, a strong password is required.
 */

/**
 * @typedef {Object} provisionedPlan
 * @property {String} capabilityStatus For example, “Enabled”.
 * @property {String} provisioningStatus For example, “Success”.
 * @property {String} service The name of the service; for example, “AccessControlS2S”
 */
