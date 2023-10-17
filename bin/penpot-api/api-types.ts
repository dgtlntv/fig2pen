// ACCESS TOKENS
// -----------------------------------------------------------------

export interface CreateAccessTokenResult {}

export interface DeleteAccessTokenResult {}

export interface GetAccessTokensResult {}

// AUTH
// -----------------------------------------------------------------

export interface LoginWithLdapResult {}

export interface LoginWithPasswordResult {}

export interface LogoutResult {}

export interface PrepareRegisterProfileResult {}

export interface RecoverProfileResult {}

export interface RegisterProfileResult {}

export interface RequestProfileRecoveryResult {}

export interface VerifyTokenResult {}

// BINFILE
// -----------------------------------------------------------------

export interface ExportBinfileResult {}

export interface ImportBinfileResult {}

// COMMENTS
// -----------------------------------------------------------------

export interface CreateCommentResult {}

export interface CreateCommentThreadResult {}

export interface DeleteCommentResult {}

export interface DeleteCommentThreadResult {}

export interface GetCommentThreadResult {}

export interface GetCommentThreadsResult {}

export interface GetCommentsResult {}

export interface GetProfilesForFileCommentsResult {}

export interface GetUnreadCommentThreadsResult {}

export interface UpdateCommentResult {}

export interface UpdateCommentThreadResult {}

export interface UpdateCommentThreadFrameResult {}

export interface UpdateCommentThreadPositionResult {}

export interface UpdateCommentThreadStatusResult {}

// DEMO
// -----------------------------------------------------------------

export interface CreateDemoProfileResult {}

// FEEDBACK
// -----------------------------------------------------------------

export interface SendUserFeedbackResult {}

// FILES
// -----------------------------------------------------------------

export interface CreateFileResult {}

export interface CreateFileObjectThumbnailResult {}

export interface CreateFileThumbnailResult {}

export interface CreateShareLinkResult {}

export interface CreateTempFileResult {}

export interface DeleteFileResult {}

export interface DeleteFileObjectThumbnailResult {}

export interface DeleteShareLinkResult {}

export interface GetFileResult extends File {}

export interface GetFileDataForThumbnailResult extends PartialFile {}

export interface GetFileFragmentResult extends FileFragment {}

export interface GetFileLibrariesResult {}

export interface GetFileObjectThumbnailsResult {}

export interface GetFileThumbnailResult {}

export interface GetLibraryFileReferencesResult {}

export interface GetPageResult {}

export interface GetProjectFilesResult {}

export interface GetTeamRecentFilesResult {}

export interface GetTeamSharedFilesResult {}

export interface HasFileLibrariesResult {}

export interface IgnoreFileLibrarySyncStatusResult {}

export interface LinkFileToLibraryResult {}

export interface PersistTempFileResult {}

export interface RenameFileResult extends SimplifiedFile {}

export interface SearchFilesResult {}

export interface SetFileSharedResult {}

export interface UnlinkFileFromLibraryResult {}

export interface UpdateFileResult {
  changes: Change[];
  fileId: string;
  id: string;
  revn: number;
  sessionId: string;
}

export interface UpdateFileLibrarySyncStatusResult {}

export interface UpdateTempFileResult {}

export interface UpsertFileObjectThumbnailResult {}

export interface UpsertFileThumbnailResult {}

// FONTS
// -----------------------------------------------------------------

export interface CreateFontVariantResult {}

export interface DeleteFontResult {}

export interface DeleteFontVariantResult {}

export interface GetFontVariantsResult {}

export interface UpdateFontResult {}

// MANAGEMENT
// -----------------------------------------------------------------

export interface CloneTemplateResult {}

export interface DuplicateFileResult {}

export interface DuplicateProjectResult {}

export interface GetBuiltinTemplatesResult {}

export interface MoveFilesResult {}

export interface MoveProjectResult {}

export interface RetrieveListOfBuiltinTemplatesResult {}

// MEDIA
// -----------------------------------------------------------------

export interface CloneFileMediaObjectResult {}

export interface CreateFileMediaObjectFromUrlResult {}

export interface UploadFileMediaObjectResult {}

// PROFILE
// -----------------------------------------------------------------

export interface DeleteProfileResult {}

export interface GetProfileResult extends Profile {}

export interface RequestEmailChangeResult {}

export interface UpdateProfileResult extends Profile {}

export interface UpdateProfilePasswordResult {}

export interface UpdateProfilePhotoResult {}

export interface UpdateProfilePropsResult {}

// PROJECTS
// -----------------------------------------------------------------

export interface CreateProjectResult {}

export interface DeleteProjectResult {}

export interface GetAllProjectsResult {}

export interface GetProjectResult {}

export interface GetProjectsResult {}

export interface RenameProjectResult {}

export interface UpdateProjectPinResult {}

// TEAMS
// -----------------------------------------------------------------

export interface CreateTeamResult {}

export interface CreateTeamInvitationsResult {}

export interface CreateTeamWithInvitationsResult {}

export interface DeleteTeamResult {}

export interface DeleteTeamInvitationResult {}

export interface DeleteTeamMemberResult {}

export interface GetTeamResult {}

export interface GetTeamInvitationTokenResult {}

export interface GetTeamInvitationsResult {}

export interface GetTeamMembersResult {}

export interface GetTeamStatsResult {}

export interface GetTeamUsersResult {}

export interface GetTeamsResult {}

export interface LeaveTeamResult {}

export interface UpdateTeamResult {}

export interface UpdateTeamInvitationRoleResult {}

export interface UpdateTeamMemberRoleResult {}

export interface UpdateTeamPhotoResult {}

// VIEWER
// -----------------------------------------------------------------

export interface GetViewOnlyBundleResult {}

// WEBHOOKS
// -----------------------------------------------------------------

export interface CreateWebhookResult {}

export interface DeleteWebhookResult {}

export interface GetWebhooksResult {}

export interface UpdateWebhookResult {}

////////////////////////////////////////////////////////////////////////////////
// Dunno where to put those
// Do they stay here or go into the ast-types?
////////////////////////////////////////////////////////////////////////////////

export interface File {
  id: string;
  features: Set<string>;
  hasMediaTrimmed: boolean;
  commentThreadSeqn: number;
  name: string;
  revn: number;
  modifiedAt: string; // Assuming 'instant' is a string representing a timestamp
  isShared: boolean;
  projectId: string;
  createdAt: string; // Assuming 'instant' is a string representing a timestamp
  data?: any;
}

export interface PartialFile {
  id: string;
  revn: number; // Assuming 'integer[min=0]' represents a non-negative integer
  page: any;
}

export interface FileFragment {
  id: string;
  fileId: string;
  createdAt: string; // Assuming 'instant' is a string representing a timestamp
  content: any; // Using 'any' to represent the wildcard type '*'
}

export interface SimplifiedFile {
  id: string;
  name: string;
  createdAt: string; // Assuming 'instant' is a string representing a timestamp
  modifiedAt: string; // Assuming 'instant' is a string representing a timestamp
}

export interface Profile {
  id: string;
  fullname: string;
  email: string;
  isActive?: boolean;
  isBlocked?: boolean;
  isDemo?: boolean;
  isMuted?: boolean;
  createdAt?: string; // Assuming 'inst' is a string representing a timestamp
  modifiedAt?: string; // Assuming 'inst' is a string representing a timestamp
  defaultProjectId?: string;
  defaultTeamId?: string;
  props?: Record<string, any>; // Using Record<string, any> to represent map[keyword,anything]
}

export interface Typography {
  id: string; // Assuming 'Uuid' is a string type
  name: string;
  fontId: string;
  fontFamily: string;
  fontVariantId: string;
  fontSize: string;
  fontWeight: string;
  fontStyle: string;
  lineHeight: string;
  letterSpacing: string;
  textTransform: string;
  modifiedAt?: string; // Assuming 'Inst' is a string representing a timestamp
  path?: string | undefined;
}

export interface ChangeWithMetadata {
  changes: Change[];
  hintOrigin?: string; // Assuming 'keyword' is a string type
  hintEvents?: string[];
}

export interface FileMediaObject {
  id: string; // Assuming 'Uuid' is a string type
  name: string;
  width: number; // Assuming 'SafeInt' represents a number
  height: number; // Assuming 'SafeInt' represents a number
  mtype: string;
  path?: string | undefined;
}

export type Change =
  | SetOptionChange
  | AddObjChange
  | ModObjChange
  | DelObjChange
  | FixObjChange
  | MovObjectsChange
  | AddPageChange
  | ModPageChange
  | DelPageChange
  | MovPageChange
  | RegObjectsChange
  | AddColorChange
  | ModColorChange
  | DelColorChange
  | AddRecentColorChange
  | AddMediaChange
  | ModMediaChange
  | DelMediaChange
  | AddComponentChange
  | ModCompoenentChange
  | DelComponentChange
  | RestoreComponentChange
  | PurgeComponentChange
  | AddTypogrphyChange
  | ModTypogrphyChange
  | DelTypogrphyChange;

export interface SetOptionChange {
  type: "setOption";
  pageId: string;
  option: string | string[];
  value: any;
}

export interface AddObjChange {
  type: "addObj";
  id: string;
  obj: Record<string, any>;
  pageId?: string;
  componentId?: string;
  frameId?: string;
  parentId?: string;
  index?: number;
  ignoreTouched?: boolean;
}

export interface ModObjChange {
  type: "modObj";
  id: string;
  pageId?: string;
  componentId?: string;
  operations: Operation[];
}

export interface DelObjChange {
  type: "delObj";
  id: string;
  pageId?: string;
  componentId?: string;
  ignoreTouched?: boolean;
}

export interface FixObjChange {
  type: "fixObj";
  id: string;
  pageId?: string;
  componentId?: string;
}

export interface MovObjectsChange {
  type: "movObjects";
  pageId?: string;
  componentId?: string;
  ignoreTouched?: boolean;
  parentId: string;
  shapes: any;
  index?: number;
  afterShape?: any;
}

export interface AddPageChange {
  type: "addPage";
  id?: string;
  name?: string;
  page?: any;
}

export interface ModPageChange {
  type: "modPage";
  id: string;
  name: string;
}

export interface DelPageChange {
  type: "delPage";
  id: string;
}

export interface MovPageChange {
  type: "movPage";
  id: string;
  index: number;
}

export interface RegObjectsChange {
  type: "regObjects";
  pageId?: string;
  componentId?: string;
  shapes: string[];
}

export interface AddColorChange {
  type: "addColor";
  color: any;
}

export interface ModColorChange {
  type: "modColor";
  color: any;
}

export interface DelColorChange {
  type: "delColor";
  id: string;
}

export interface AddRecentColorChange {
  type: "addRecentColor";
  color: any;
}

export interface AddMediaChange {
  type: "addMedia";
  object: FileMediaObject;
}

export interface ModMediaChange {
  type: "modMedia";
  object: FileMediaObject;
}

export interface DelMediaChange {
  type: "delMedia";
  id: string;
}

export interface AddComponentChange {
  type: "addComponent";
  id: string;
  name: string;
  shapes?: any[];
  path?: string;
}

export interface ModCompoenentChange {
  type: "modComponent";
  id: string;
  shapes?: any[];
  name?: string;
}

export interface DelComponentChange {
  type: "delComponent";
  id: string;
  skipUndelete?: boolean;
}

export interface RestoreComponentChange {
  type: "restoreComponent";
  id: string;
}

export interface PurgeComponentChange {
  type: "purgeComponent";
  id: string;
}

export interface AddTypogrphyChange {
  type: "addTypography";
  typography: Typography;
}

export interface ModTypogrphyChange {
  type: "modTypography";
  typography: Typography;
}

export interface DelTypogrphyChange {
  type: "delTypography";
  id: string;
}

export interface ChangeWithMetadata {
  changes: Change[];
  hintOrigin?: string;
  hintEvents?: string[];
}

export interface FileMediaObject {
  id: string;
  name: string;
  width: number;
  height: number;
  mtype: string;
  path?: string;
}

type SetOperation = {
  type: "set";
  keyword: string;
  val: any;
  ignoreTouched?: boolean;
  ignoreGeometry?: boolean;
};

type SetTouchedOperation = {
  type: "setTouched";
  touched?: string[] | null;
};

type SetRemoteSyncedOperation = {
  type: "setRemoteSynced";
  remoteSynced?: boolean | null;
};

type Operation = SetOperation | SetTouchedOperation | SetRemoteSyncedOperation;
