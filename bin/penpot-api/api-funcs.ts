import { ApiRequestMethod } from "./utils";
import {
  Change,
  ChangeWithMetadata,
  CloneFileMediaObjectResult,
  CloneTemplateResult,
  CreateAccessTokenResult,
  CreateCommentResult,
  CreateCommentThreadResult,
  CreateDemoProfileResult,
  CreateFileMediaObjectFromUrlResult,
  CreateFileObjectThumbnailResult,
  CreateFileResult,
  CreateFileThumbnailResult,
  CreateFontVariantResult,
  CreateProjectResult,
  CreateShareLinkResult,
  CreateTeamInvitationsResult,
  CreateTeamResult,
  CreateTeamWithInvitationsResult,
  CreateTempFileResult,
  CreateWebhookResult,
  DeleteAccessTokenResult,
  DeleteCommentResult,
  DeleteCommentThreadResult,
  DeleteFileObjectThumbnailResult,
  DeleteFileResult,
  DeleteFontResult,
  DeleteFontVariantResult,
  DeleteProfileResult,
  DeleteProjectResult,
  DeleteShareLinkResult,
  DeleteTeamInvitationResult,
  DeleteTeamMemberResult,
  DeleteTeamResult,
  DeleteWebhookResult,
  DuplicateFileResult,
  DuplicateProjectResult,
  ExportBinfileResult,
  GetAccessTokensResult,
  GetAllProjectsResult,
  GetBuiltinTemplatesResult,
  GetCommentThreadResult,
  GetCommentThreadsResult,
  GetCommentsResult,
  GetFileDataForThumbnailResult,
  GetFileFragmentResult,
  GetFileLibrariesResult,
  GetFileObjectThumbnailsResult,
  GetFileResult,
  GetFileThumbnailResult,
  GetFontVariantsResult,
  GetLibraryFileReferencesResult,
  GetPageResult,
  GetProfileResult,
  GetProfilesForFileCommentsResult,
  GetProjectResult,
  GetProjectsResult,
  GetTeamInvitationTokenResult,
  GetTeamInvitationsResult,
  GetTeamMembersResult,
  GetTeamRecentFilesResult,
  GetTeamResult,
  GetTeamSharedFilesResult,
  GetTeamStatsResult,
  GetTeamUsersResult,
  GetTeamsResult,
  GetUnreadCommentThreadsResult,
  GetViewOnlyBundleResult,
  GetWebhooksResult,
  HasFileLibrariesResult,
  IgnoreFileLibrarySyncStatusResult,
  ImportBinfileResult,
  LeaveTeamResult,
  LinkFileToLibraryResult,
  LoginWithLdapResult,
  LoginWithPasswordResult,
  LogoutResult,
  MoveFilesResult,
  MoveProjectResult,
  PersistTempFileResult,
  PrepareRegisterProfileResult,
  RecoverProfileResult,
  RegisterProfileResult,
  RenameFileResult,
  RenameProjectResult,
  RequestEmailChangeResult,
  RequestProfileRecoveryResult,
  RetrieveListOfBuiltinTemplatesResult,
  SearchFilesResult,
  SendUserFeedbackResult,
  SetFileSharedResult,
  UnlinkFileFromLibraryResult,
  UpdateCommentResult,
  UpdateCommentThreadFrameResult,
  UpdateCommentThreadPositionResult,
  UpdateCommentThreadResult,
  UpdateCommentThreadStatusResult,
  UpdateFileLibrarySyncStatusResult,
  UpdateFileResult,
  UpdateFontResult,
  UpdateProfilePasswordResult,
  UpdateProfilePhotoResult,
  UpdateProfilePropsResult,
  UpdateProfileResult,
  UpdateProjectPinResult,
  UpdateTeamInvitationRoleResult,
  UpdateTeamMemberRoleResult,
  UpdateTeamPhotoResult,
  UpdateTeamResult,
  UpdateTempFileResult,
  UpdateWebhookResult,
  UploadFileMediaObjectResult,
  UpsertFileObjectThumbnailResult,
  UpsertFileThumbnailResult,
  VerifyTokenResult,
} from "./api-types";

type ApiClass = {
  request: ApiRequestMethod;
};

// ACCESS TOKENS
// -----------------------------------------------------------------

export function createAccessTokenApi(
  this: ApiClass,
  profileId: string,
  accessTokenName: string,
  opts?: {
    expiration?: string;
  },
): Promise<CreateAccessTokenResult> {
  return this.request<CreateAccessTokenResult>("url");
}

export function deleteAccessTokenApi(
  this: ApiClass,
  profileId: string,
  id: string,
): Promise<DeleteAccessTokenResult> {
  return this.request<DeleteAccessTokenResult>("url");
}

export function getAccessTokenApi(
  this: ApiClass,
  profileId: string,
): Promise<GetAccessTokensResult> {
  return this.request<GetAccessTokensResult>("url");
}

// AUTH
// -----------------------------------------------------------------

// Performs the authentication using LDAP backend. Only works if LDAP is properly configured and enabled with `login-with-ldap` flag.
export function loginWithLdapApi(
  this: ApiClass,
  email: string,
  password: string,
  opts?: {
    invitationToken?: string;
  },
): Promise<LoginWithLdapResult> {
  return this.request<LoginWithLdapResult>("url");
}

// Performs authentication using penpot password.
export function loginWithPasswordApi(
  this: ApiClass,
  email: string,
  password: string,
  opts?: {
    invitationToken?: string;
  },
): Promise<LoginWithPasswordResult> {
  return this.request<LoginWithPasswordResult>("url");
}

// Clears the authentication cookie and logout the current session.
export function logoutApi(this: ApiClass): Promise<LogoutResult> {
  return this.request<LogoutResult>("url");
}

export function prepareRegisterProfileApi(
  this: ApiClass,
  email: string,
  password: string,
  opts?: {
    invitationToken?: string;
  },
): Promise<PrepareRegisterProfileResult> {
  return this.request<PrepareRegisterProfileResult>("url");
}

export function recoverProfileApi(
  this: ApiClass,
  token: string,
  password: string,
): Promise<RecoverProfileResult> {
  return this.request<RecoverProfileResult>("url");
}

export function registerProfileApi(
  this: ApiClass,
  token: string,
  fullname: string,
): Promise<RegisterProfileResult> {
  return this.request<RegisterProfileResult>("url");
}

export function requestProfileRecoveryApi(
  this: ApiClass,
  email: string,
): Promise<RequestProfileRecoveryResult> {
  return this.request<RequestProfileRecoveryResult>("url");
}

export function verifyTokenApi(
  this: ApiClass,
  token: string,
  opts?: { profileId: string },
): Promise<VerifyTokenResult> {
  return this.request<VerifyTokenResult>("url");
}

// BINFILE
// -----------------------------------------------------------------

// Export a penpot file in a binary format.
export function exportBinfileApi(
  this: ApiClass,
  profileId: string,
  fileId: string,
  includeLibraries: boolean,
  embedAssets: boolean,
): Promise<ExportBinfileResult> {
  return this.request<ExportBinfileResult>("url");
}

// Import a penpot file in a binary format.
export function importBinfileApi(
  this: ApiClass,
  profileId: string,
  projectId: string,
  file: any, // Replace 'any' with the specific type if known
): Promise<ImportBinfileResult> {
  return this.request<ImportBinfileResult>("url");
}

// COMMENTS
// -----------------------------------------------------------------

export function createCommentApi(
  this: ApiClass,
  profileId: string,
  threadId: string,
  content: string,
  opts?: {
    shareId?: string;
  },
): Promise<CreateCommentResult> {
  return this.request<CreateCommentResult>("url");
}

export function createCommentThreadApi(
  this: ApiClass,
  profileId: string,
  fileId: string,
  position: any, // Replace 'any' with the specific type if known
  content: string,
  pageId: string,
  frameId: string,
  opts?: {
    shareId?: string;
  },
): Promise<CreateCommentThreadResult> {
  return this.request<CreateCommentThreadResult>("url");
}

export function deleteCommentApi(
  this: ApiClass,
  profileId: string,
  id: string,
  opts?: {
    shareId?: string;
  },
): Promise<DeleteCommentResult> {
  return this.request<DeleteCommentResult>("url");
}

export function deleteCommentThreadApi(
  this: ApiClass,
  profileId: string,
  id: string,
  opts?: {
    shareId?: string;
  },
): Promise<DeleteCommentThreadResult> {
  return this.request<DeleteCommentThreadResult>("url");
}

export function getCommentThreadApi(
  this: ApiClass,
  profileId: string,
  id: string,
  opts?: {
    shareId?: string;
  },
): Promise<GetCommentThreadResult> {
  return this.request<GetCommentThreadResult>("url");
}

export function getCommentThreadsApi(
  this: ApiClass,
  profileId: string,
  opts?: {
    fileId?: string;
    shareId?: string;
    teamId?: string;
  },
): Promise<GetCommentThreadsResult> {
  //have a condition that either file-id or team-id should be present
  return this.request<GetCommentThreadsResult>("url");
}

export function getCommentsApi(
  this: ApiClass,
  profileId: string,
  threadId: string,
  opts?: {
    shareId?: string;
  },
): Promise<GetCommentsResult> {
  return this.request<GetCommentsResult>("url");
}

// Retrieves a list of profiles with limited set of properties of all participants on comment threads of the file.
export function getProfilesForFileCommentsApi(
  this: ApiClass,
  profileId: string,
  fileId: string,
  opts?: {
    shareId?: string;
  },
): Promise<GetProfilesForFileCommentsResult> {
  return this.request<GetProfilesForFileCommentsResult>("url");
}

export function getUnreadCommentThreadsApi(
  this: ApiClass,
  profileId: string,
  teamId: string,
): Promise<GetUnreadCommentThreadsResult> {
  return this.request<GetUnreadCommentThreadsResult>("url");
}

export function updateCommentApi(
  this: ApiClass,
  profileId: string,
  id: string,
  content: string,
  opts?: {
    shareId?: string;
  },
): Promise<UpdateCommentResult> {
  return this.request<UpdateCommentResult>("url");
}

export function updateCommentThreadApi(
  this: ApiClass,
  profileId: string,
  id: string,
  isResolved: boolean,
  opts?: {
    shareId?: string;
  },
): Promise<UpdateCommentThreadResult> {
  return this.request<UpdateCommentThreadResult>("url");
}

export function updateCommentThreadFrameApi(
  this: ApiClass,
  profileId: string,
  id: string,
  frameId: string,
  opts?: {
    shareId?: string;
  },
): Promise<UpdateCommentThreadFrameResult> {
  return this.request<UpdateCommentThreadFrameResult>("url");
}

export function updateCommentThreadPositionApi(
  this: ApiClass,
  profileId: string,
  id: string,
  position: any, // Replace 'any' with the specific type if known
  frameId: string,
  opts?: {
    shareId?: string;
  },
): Promise<UpdateCommentThreadPositionResult> {
  return this.request<UpdateCommentThreadPositionResult>("url");
}

export function updateCommentThreadStatusApi(
  this: ApiClass,
  profileId: string,
  id: string,
  opts?: {
    shareId?: string;
  },
): Promise<UpdateCommentThreadStatusResult> {
  return this.request<UpdateCommentThreadStatusResult>("url");
}

// DEMO
// -----------------------------------------------------------------

// A command that is responsible of creating a demo purpose profile. It only works if the `demo-users` flag is enabled in the configuration.
export function createDemoProfileApi(
  this: ApiClass,
): Promise<CreateDemoProfileResult> {
  return this.request<CreateDemoProfileResult>("url");
}

// FEEDBACK
// -----------------------------------------------------------------

export function sendUserFeedbackApi(
  this: ApiClass,
  profileId: string,
  subject: string,
  content: string,
): Promise<SendUserFeedbackResult> {
  return this.request<SendUserFeedbackResult>("url");
}

// FILES
// -----------------------------------------------------------------

export function createFileApi(
  this: ApiClass,
  profileId: string,
  name: string,
  projectId: string,
  opts?: {
    id?: string;
    isShared?: boolean;
    features?: any; // Replace 'any' with the specific type if known
  },
): Promise<CreateFileResult> {
  return this.request<CreateFileResult>("url");
}

export function createFileObjectThumbnailApi(
  this: ApiClass,
  fileId: string, // Assuming uuid translates to a string in TypeScript
  objectId: string,
  media: {
    filename: string;
    size: number; // Assuming integer translates to number in TypeScript
    path: string; // Assuming path translates to a string in TypeScript
    mtype?: string;
    headers?: { [key: string]: string };
  },
): Promise<CreateFileObjectThumbnailResult> {
  return this.request<CreateFileObjectThumbnailResult>("url");
}

// Creates or updates the file thumbnail. Mainly used for paint the grid thumbnails.
export function createFileThumbnailApi(
  this: ApiClass,
  fileId: string,
  revn: number,
  media: {
    filename: string;
    size: number;
    path: string;
    mtype?: string;
    headers?: { [key: string]: string };
  },
): Promise<CreateFileThumbnailResult> {
  return this.request<CreateFileThumbnailResult>("url");
}

// Creates a share-link object. Share links are resources that allows external users access to specific pages of a file with specific permissions (who-comment and who-inspect).
export function createShareLinkApi(
  this: ApiClass,
  profileId: string,
  fileId: string,
  whoComment: any, // Replace 'any' with the specific type if known
  whoInspect: any, // Replace 'any' with the specific type if known
  pages: any, // Replace 'any' with the specific type if known
): Promise<CreateShareLinkResult> {
  return this.request<CreateShareLinkResult>("url");
}

export function createTempFileApi(
  this: ApiClass,
  profileId: string,
  name: string,
  projectId: string,
  opts?: {
    id?: string;
    isShared?: boolean;
    features?: any; // Replace 'any' with the specific type if known
    createPage?: any; // Replace 'any' with the specific type if known
  },
): Promise<CreateTempFileResult> {
  return this.request<CreateTempFileResult>("url");
}

export function deleteFileApi(
  this: ApiClass,
  profileId: string,
  id: string,
): Promise<DeleteFileResult> {
  return this.request<DeleteFileResult>("url");
}

export function deleteFileObjectThumbnailApi(
  this: ApiClass,
  profileId: string,
  fileId: string,
  objectId: string,
): Promise<DeleteFileObjectThumbnailResult> {
  return this.request<DeleteFileObjectThumbnailResult>("url");
}

export function deleteShareLinkApi(
  this: ApiClass,
  profileId: string,
  id: string,
): Promise<DeleteShareLinkResult> {
  return this.request<DeleteShareLinkResult>("url");
}

// Retrieve a file by its ID. Only authenticated users.
export function getFileApi(
  this: ApiClass,
  id: string,
  opts?: {
    features?: Set<string>;
    projectId?: string;
  },
): Promise<GetFileResult> {
  return this.request<GetFileResult>("url");
}

// Retrieves the data for generate the thumbnail of the file. Used mainly for render thumbnails on dashboard.
export function getFileDataForThumbnailApi(
  this: ApiClass,
  fileId: string,
  opts?: {
    features?: Set<string>;
  },
): Promise<GetFileDataForThumbnailResult> {
  return this.request<GetFileDataForThumbnailResult>("url");
}

// Retrieve a file by its ID. Only authenticated users.
export function getFileFragmentApi(
  this: ApiClass,
  fileId: string,
  fragmentId: string,
  opts?: {
    shareId?: string;
  },
): Promise<GetFileFragmentResult> {
  return this.request<GetFileFragmentResult>("url");
}

// Get libraries used by the specified file.
export function getFileLibrariesApi(
  this: ApiClass,
  profileId: string,
  fileId: string,
): Promise<GetFileLibrariesResult> {
  return this.request<GetFileLibrariesResult>("url");
}

// Retrieve a file object thumbnails.
export function getFileObjectThumbnailsApi(
  this: ApiClass,
  fileId: string,
): Promise<GetFileObjectThumbnailsResult> {
  return this.request<GetFileObjectThumbnailsResult>("url");
}

export function getFileThumbnailApi(
  this: ApiClass,
  profileId: string,
  fileId: string,
  opts?: {
    revn?: number;
  },
): Promise<GetFileThumbnailResult> {
  return this.request<GetFileThumbnailResult>("url");
}

// Returns all the file references that use specified file (library) id.
export function getLibraryFileReferencesApi(
  this: ApiClass,
  profileId: string,
  fileId: string,
): Promise<GetLibraryFileReferencesResult> {
  return this.request<GetLibraryFileReferencesResult>("url");
}

// Retrieves the page data from file and returns it. If no page-id is specified, the first page will be returned.
// If object-id is specified, only that object and its children will be returned in the page objects data structure.
// If you specify the object-id, the page-id parameter becomes mandatory. Mainly used for rendering purposes.
export function getPageApi(
  this: ApiClass,
  fileId: string,
  opts?: {
    pageId?: string;
    shareId?: string;
    objectId?: string;
    features?: Set<string>;
  },
): Promise<GetPageResult> {
  return this.request<GetPageResult>("url");
}

// Get all files for the specified project.
export function getProjectFilesApi(
  this: ApiClass,
  projectId: string,
): Promise<[GetFileResult]> {
  return this.request<[GetFileResult]>("url");
}

export function getTeamRecentFilesApi(
  this: ApiClass,
  profileId: string,
  teamId: string,
): Promise<GetTeamRecentFilesResult> {
  return this.request<GetTeamRecentFilesResult>("url");
}

// Get all file (libraries) for the specified team.
export function getTeamSharedFilesApi(
  this: ApiClass,
  profileId: string,
  teamId: string,
): Promise<GetTeamSharedFilesResult> {
  return this.request<GetTeamSharedFilesResult>("url");
}

// Checks if the file has libraries. Returns a boolean
export function hasFileLibrariesApi(
  this: ApiClass,
  fileId: string,
): Promise<HasFileLibrariesResult> {
  return this.request<HasFileLibrariesResult>("url");
}

// Ignore updates in linked files
export function ignoreFileLibrarySyncStatusApi(
  this: ApiClass,
  profileId: string,
  fileId: string,
  date: any, // Replace 'any' with the specific type if known
): Promise<IgnoreFileLibrarySyncStatusResult> {
  return this.request<IgnoreFileLibrarySyncStatusResult>("url");
}

export function linkFileToLibraryApi(
  this: ApiClass,
  profileId: string,
  fileId: string,
  libraryId: string,
): Promise<LinkFileToLibraryResult> {
  return this.request<LinkFileToLibraryResult>("url");
}
export function persistTempFileApi(
  this: ApiClass,
  profileId: string,
  id: string,
): Promise<PersistTempFileResult> {
  return this.request<PersistTempFileResult>("url");
}

export function renameFileApi(
  this: ApiClass,
  name: string,
  id: string,
): Promise<RenameFileResult> {
  return this.request<RenameFileResult>("url");
}

export function searchFilesApi(
  this: ApiClass,
  profileId: string,
  teamId: string,
  opts?: {
    searchTerm?: string;
  },
): Promise<SearchFilesResult> {
  return this.request<SearchFilesResult>("url");
}

export function setFileSharedApi(
  this: ApiClass,
  profileId: string,
  id: string,
  isShared: boolean,
): Promise<SetFileSharedResult> {
  return this.request<SetFileSharedResult>("url");
}

export function unlinkFileFromLibraryApi(
  this: ApiClass,
  profileId: string,
  fileId: string,
  libraryId: string,
): Promise<UnlinkFileFromLibraryResult> {
  return this.request<UnlinkFileFromLibraryResult>("url");
}

// This one is quite complex revisit it
export function updateFileApi(
  this: ApiClass,
  id: string,
  sessionId: string,
  revn: number,
  features?: string[],
  changes?: Change[],
  changesWithMetadata?: ChangeWithMetadata[],
): Promise<[UpdateFileResult]> {
  return this.request<[UpdateFileResult]>("url");
}

// Update the synchronization status of a file->library link
export function updateFileLibrarySyncStatusApi(
  this: ApiClass,
  profileId: string,
  fileId: string,
  libraryId: string,
): Promise<UpdateFileLibrarySyncStatusResult> {
  return this.request<UpdateFileLibrarySyncStatusResult>("url");
}

export function updateTempFileApi(
  this: ApiClass,
  profileId: string,
  changes: any[], // Replace 'any[]' with the specific type if known
  revn: number,
  sessionId: string,
  id: string,
): Promise<UpdateTempFileResult> {
  return this.request<UpdateTempFileResult>("url");
}

export function upsertFileObjectThumbnailApi(
  this: ApiClass,
  profileId: string,
  fileId: string,
  objectId: string,
  opts?: {
    data?: any; // Replace 'any' with the specific type if known
  },
): Promise<UpsertFileObjectThumbnailResult> {
  return this.request<UpsertFileObjectThumbnailResult>("url");
}

// Creates or updates the file thumbnail. Mainly used for paint the grid thumbnails.
export function upsertFileThumbnailApi(
  this: ApiClass,
  profileId: string,
  fileId: string,
  revn: number,
  props: any, // Replace 'any' with the specific type if known
  data: any, // Replace 'any' with the specific type if known
): Promise<UpsertFileThumbnailResult> {
  return this.request<UpsertFileThumbnailResult>("url");
}

// FONTS
// -----------------------------------------------------------------

export function createFontVariantApi(
  this: ApiClass,
  profileId: string,
  teamId: string,
  data: any, // Replace 'any' with the specific type if known
  fontId: string,
  fontFamily: string,
  fontWeight: string,
  fontStyle: string,
): Promise<CreateFontVariantResult> {
  return this.request<CreateFontVariantResult>("url");
}

export function deleteFontApi(
  this: ApiClass,
  profileId: string,
  teamId: string,
  id: string,
): Promise<DeleteFontResult> {
  return this.request<DeleteFontResult>("url");
}

export function deleteFontVariantApi(
  this: ApiClass,
  profileId: string,
  teamId: string,
  id: string,
): Promise<DeleteFontVariantResult> {
  return this.request<DeleteFontVariantResult>("url");
}

export function getFontVariantsApi(
  this: ApiClass,
  profileId: string,
  opts?: {
    teamId?: string;
    fileId?: string;
    projectId?: string;
    shareId?: string;
  },
): Promise<GetFontVariantsResult> {
  // Check if either teamId, fileId, or projectId is provided in the options.
  return this.request<GetFontVariantsResult>("url");
}

export function updateFontApi(
  this: ApiClass,
  profileId: string,
  teamId: string,
  id: string,
  name: string,
): Promise<UpdateFontResult> {
  return this.request<UpdateFontResult>("url");
}

// MANAGEMENT
// -----------------------------------------------------------------

// Clone into the specified project the template by its id.
export function cloneTemplateApi(
  this: ApiClass,
  projectId: string,
  templateId: string,
): Promise<CloneTemplateResult> {
  return this.request<CloneTemplateResult>("url");
}

// Duplicate a single file in the same team.
export function duplicateFileApi(
  this: ApiClass,
  profileId: string,
  fileId: string,
  opts?: {
    name?: string;
  },
): Promise<DuplicateFileResult> {
  return this.request<DuplicateFileResult>("url");
}

// Duplicate an entire project with all the files
export function duplicateProjectApi(
  this: ApiClass,
  profileId: string,
  projectId: string,
  opts?: {
    name?: string;
  },
): Promise<DuplicateProjectResult> {
  return this.request<DuplicateProjectResult>("url");
}

export function getBuiltinTemplatesApi(
  this: ApiClass,
): Promise<GetBuiltinTemplatesResult> {
  return this.request<GetBuiltinTemplatesResult>("url");
}

// Move a set of files from one project to other.
export function moveFilesApi(
  this: ApiClass,
  profileId: string,
  ids: string[],
  projectId: string,
): Promise<MoveFilesResult> {
  return this.request<MoveFilesResult>("url");
}

// Move projects between teams.
export function moveProjectApi(
  this: ApiClass,
  profileId: string,
  teamId: string,
  projectId: string,
): Promise<MoveProjectResult> {
  return this.request<MoveProjectResult>("url");
}

export function retrieveListOfBuiltinTemplatesApi(
  this: ApiClass,
): Promise<RetrieveListOfBuiltinTemplatesResult> {
  return this.request<RetrieveListOfBuiltinTemplatesResult>("url");
}

// MEDIA
// -----------------------------------------------------------------

export function cloneFileMediaObjectApi(
  this: ApiClass,
  profileId: string,
  fileId: string,
  isLocal: boolean,
  id: string,
): Promise<CloneFileMediaObjectResult> {
  return this.request<CloneFileMediaObjectResult>("url");
}

export function createFileMediaObjectFromUrlApi(
  this: ApiClass,
  profileId: string,
  fileId: string,
  isLocal: boolean,
  url: string,
  opts?: {
    id?: string;
    name?: string;
  },
): Promise<CreateFileMediaObjectFromUrlResult> {
  return this.request<CreateFileMediaObjectFromUrlResult>("url");
}

export function uploadFileMediaObjectApi(
  this: ApiClass,
  profileId: string,
  fileId: string,
  isLocal: boolean,
  name: string,
  content: any, // Replace 'any' with the specific type if known
  opts?: {
    id?: string;
  },
): Promise<UploadFileMediaObjectResult> {
  return this.request<UploadFileMediaObjectResult>("url");
}

// PROFILE
// -----------------------------------------------------------------

// doesnt have params in the docs
export function deleteProfileApi(this: ApiClass): Promise<DeleteProfileResult> {
  return this.request<DeleteProfileResult>("url");
}

// doesnt have params in the docs
export function getProfileApi(this: ApiClass): Promise<GetProfileResult> {
  return this.request<GetProfileResult>("url");
}

export function requestEmailChangeApi(
  this: ApiClass,
  email: string,
): Promise<RequestEmailChangeResult> {
  return this.request<RequestEmailChangeResult>("url");
}

export function updateProfileApi(
  this: ApiClass,
  fullname: string,
  opts?: {
    lang?: string; // Replace 'string' with a more specific type for length validation if needed
    theme?: string; // Replace 'string' with a more specific type for length validation if needed
  },
): Promise<UpdateProfileResult> {
  return this.request<UpdateProfileResult>("url");
}

export function updateProfilePasswordApi(
  this: ApiClass,
  password: string,
  opts?: {
    oldPassword?: string;
  },
): Promise<UpdateProfilePasswordResult> {
  return this.request<UpdateProfilePasswordResult>("url");
}

export function updateProfilePhotoApi(
  this: ApiClass,
  file: {
    filename: string;
    size: number;
    path: string;
    mtype?: string;
    headers?: { [key: string]: string };
  },
): Promise<UpdateProfilePhotoResult> {
  return this.request<UpdateProfilePhotoResult>("url");
}

export function updateProfilePropsApi(
  this: ApiClass,
  props: { [key: string]: any },
): Promise<UpdateProfilePropsResult> {
  return this.request<UpdateProfilePropsResult>("url");
}

// PROJECTS
// -----------------------------------------------------------------

export function createProjectApi(
  this: ApiClass,
  profileId: string,
  teamId: string,
  name: string,
  opts?: {
    id?: string;
  },
): Promise<CreateProjectResult> {
  return this.request<CreateProjectResult>("url");
}

export function deleteProjectApi(
  this: ApiClass,
  profileId: string,
  id: string,
): Promise<DeleteProjectResult> {
  return this.request<DeleteProjectResult>("url");
}

export function getAllProjectsApi(
  this: ApiClass,
  profileId: string,
): Promise<GetAllProjectsResult> {
  return this.request<GetAllProjectsResult>("url");
}

export function getProjectApi(
  this: ApiClass,
  profileId: string,
  id: string,
): Promise<GetProjectResult> {
  return this.request<GetProjectResult>("url");
}

export function getProjectsApi(
  this: ApiClass,
  profileId: string,
  teamId: string,
): Promise<GetProjectsResult> {
  return this.request<GetProjectsResult>("url");
}

export function renameProjectApi(
  this: ApiClass,
  profileId: string,
  name: string,
  id: string,
): Promise<RenameProjectResult> {
  return this.request<RenameProjectResult>("url");
}

export function updateProjectPinApi(
  this: ApiClass,
  profileId: string,
  id: string,
  teamId: string,
  isPinned: boolean,
): Promise<UpdateProjectPinResult> {
  return this.request<UpdateProjectPinResult>("url");
}

// TEAMS
// -----------------------------------------------------------------

export function createTeamApi(
  this: ApiClass,
  profileId: string,
  name: string,
  opts?: {
    id?: string;
  },
): Promise<CreateTeamResult> {
  return this.request<CreateTeamResult>("url");
}

// A rpc call that allow to send a single or multiple invitations to join the team.
export function createTeamInvitationsApi(
  this: ApiClass,
  teamId: string,
  role: "admin" | "editor" | "owner",
  emails: Set<string>,
): Promise<CreateTeamInvitationsResult> {
  return this.request<CreateTeamInvitationsResult>("url");
}

export function createTeamWithInvitationsApi(
  this: ApiClass,
  emails: Set<string>,
  role: "admin" | "editor" | "owner",
): Promise<CreateTeamWithInvitationsResult> {
  return this.request<CreateTeamWithInvitationsResult>("url");
}

export function deleteTeamApi(
  this: ApiClass,
  profileId: string,
  id: string,
): Promise<DeleteTeamResult> {
  return this.request<DeleteTeamResult>("url");
}

export function deleteTeamInvitationApi(
  this: ApiClass,
  profileId: string,
  teamId: string,
  email: string,
): Promise<DeleteTeamInvitationResult> {
  return this.request<DeleteTeamInvitationResult>("url");
}

export function deleteTeamMemberApi(
  this: ApiClass,
  profileId: string,
  teamId: string,
  memberId: string,
): Promise<DeleteTeamMemberResult> {
  return this.request<DeleteTeamMemberResult>("url");
}

export function getTeamApi(
  this: ApiClass,
  profileId: string,
  id: string,
): Promise<GetTeamResult> {
  return this.request<GetTeamResult>("url");
}

export function getTeamInvitationTokenApi(
  this: ApiClass,
  profileId: string,
  teamId: string,
  email: string,
): Promise<GetTeamInvitationTokenResult> {
  return this.request<GetTeamInvitationTokenResult>("url");
}

export function getTeamInvitationsApi(
  this: ApiClass,
  profileId: string,
  teamId: string,
): Promise<GetTeamInvitationsResult> {
  return this.request<GetTeamInvitationsResult>("url");
}

export function getTeamMembersApi(
  this: ApiClass,
  profileId: string,
  teamId: string,
): Promise<GetTeamMembersResult> {
  return this.request<GetTeamMembersResult>("url");
}

export function getTeamStatsApi(
  this: ApiClass,
  profileId: string,
  teamId: string,
): Promise<GetTeamStatsResult> {
  return this.request<GetTeamStatsResult>("url");
}

export function getTeamUsersApi(
  this: ApiClass,
  profileId: string,
  opts?: {
    teamId?: string;
    fileId?: string;
  },
): Promise<GetTeamUsersResult> {
  // check if either teamId or fileId is given
  return this.request<GetTeamUsersResult>("url");
}

export function getTeamsApi(
  this: ApiClass,
  profileId: string,
): Promise<GetTeamsResult> {
  return this.request<GetTeamsResult>("url");
}

export function leaveTeamApi(
  this: ApiClass,
  profileId: string,
  id: string,
  opts?: {
    reassignTo?: string;
  },
): Promise<LeaveTeamResult> {
  return this.request<LeaveTeamResult>("url");
}

export function updateTeamApi(
  this: ApiClass,
  profileId: string,
  name: string,
  id: string,
): Promise<UpdateTeamResult> {
  return this.request<UpdateTeamResult>("url");
}

export function updateTeamInvitationRoleApi(
  this: ApiClass,
  profileId: string,
  teamId: string,
  email: string,
  role: "admin" | "editor" | "owner",
): Promise<UpdateTeamInvitationRoleResult> {
  return this.request<UpdateTeamInvitationRoleResult>("url");
}

export function updateTeamMemberRoleApi(
  this: ApiClass,
  profileId: string,
  teamId: string,
  memberId: string,
  role: "admin" | "editor" | "owner",
): Promise<UpdateTeamMemberRoleResult> {
  return this.request<UpdateTeamMemberRoleResult>("url");
}

export function updateTeamPhotoApi(
  this: ApiClass,
  profileId: string,
  teamId: string,
  file: string,
): Promise<UpdateTeamPhotoResult> {
  return this.request<UpdateTeamPhotoResult>("url");
}

// VIEWER
// -----------------------------------------------------------------

export function getViewOnlyBundleApi(
  this: ApiClass,
  fileId: string,
  opts?: {
    shareId?: string;
    features?: Set<string>;
  },
): Promise<GetViewOnlyBundleResult> {
  return this.request<GetViewOnlyBundleResult>("url");
}

// WEBHOOKS
// -----------------------------------------------------------------

export function createWebhookApi(
  this: ApiClass,
  profileId: string,
  teamId: string,
  uri: string,
  mtype: string,
  opts?: {
    isActive?: boolean;
  },
): Promise<CreateWebhookResult> {
  return this.request<CreateWebhookResult>("url");
}

export function deleteWebhookApi(
  this: ApiClass,
  profileId: string,
  id: string,
): Promise<DeleteWebhookResult> {
  return this.request<DeleteWebhookResult>("url");
}

export function getWebhooksApi(
  this: ApiClass,
  profileId: string,
  teamId: string,
): Promise<GetWebhooksResult> {
  return this.request<GetWebhooksResult>("url");
}

export function updateWebhookApi(
  this: ApiClass,
  id: string,
  uri: string,
  mtype: string,
  isActive: boolean,
): Promise<UpdateWebhookResult> {
  return this.request<UpdateWebhookResult>("url");
}
