import {
  cloneFileMediaObjectApi,
  cloneTemplateApi,
  createAccessTokenApi,
  createCommentApi,
  createCommentThreadApi,
  createDemoProfileApi,
  createFileApi,
  createFileMediaObjectFromUrlApi,
  createFileObjectThumbnailApi,
  createFileThumbnailApi,
  createFontVariantApi,
  createProjectApi,
  createShareLinkApi,
  createTeamApi,
  createTeamInvitationsApi,
  createTeamWithInvitationsApi,
  createTempFileApi,
  createWebhookApi,
  deleteAccessTokenApi,
  deleteCommentApi,
  deleteCommentThreadApi,
  deleteFileApi,
  deleteFileObjectThumbnailApi,
  deleteFontApi,
  deleteFontVariantApi,
  deleteProfileApi,
  deleteProjectApi,
  deleteShareLinkApi,
  deleteTeamApi,
  deleteTeamInvitationApi,
  deleteTeamMemberApi,
  deleteWebhookApi,
  duplicateFileApi,
  duplicateProjectApi,
  exportBinfileApi,
  getAccessTokenApi,
  getAllProjectsApi,
  getBuiltinTemplatesApi,
  getCommentThreadApi,
  getCommentThreadsApi,
  getCommentsApi,
  getFileApi,
  getFileDataForThumbnailApi,
  getFileFragmentApi,
  getFileLibrariesApi,
  getFileObjectThumbnailsApi,
  getFileThumbnailApi,
  getFontVariantsApi,
  getLibraryFileReferencesApi,
  getPageApi,
  getProfileApi,
  getProfilesForFileCommentsApi,
  getProjectApi,
  getProjectFilesApi,
  getProjectsApi,
  getTeamApi,
  getTeamInvitationTokenApi,
  getTeamInvitationsApi,
  getTeamMembersApi,
  getTeamRecentFilesApi,
  getTeamSharedFilesApi,
  getTeamStatsApi,
  getTeamUsersApi,
  getTeamsApi,
  getUnreadCommentThreadsApi,
  getViewOnlyBundleApi,
  getWebhooksApi,
  hasFileLibrariesApi,
  ignoreFileLibrarySyncStatusApi,
  importBinfileApi,
  leaveTeamApi,
  linkFileToLibraryApi,
  loginWithLdapApi,
  loginWithPasswordApi,
  logoutApi,
  moveFilesApi,
  moveProjectApi,
  persistTempFileApi,
  prepareRegisterProfileApi,
  recoverProfileApi,
  registerProfileApi,
  renameFileApi,
  renameProjectApi,
  requestEmailChangeApi,
  requestProfileRecoveryApi,
  retrieveListOfBuiltinTemplatesApi,
  searchFilesApi,
  sendUserFeedbackApi,
  setFileSharedApi,
  unlinkFileFromLibraryApi,
  updateCommentApi,
  updateCommentThreadApi,
  updateCommentThreadFrameApi,
  updateCommentThreadPositionApi,
  updateCommentThreadStatusApi,
  updateFileApi,
  updateFileLibrarySyncStatusApi,
  updateFontApi,
  updateProfileApi,
  updateProfilePasswordApi,
  updateProfilePhotoApi,
  updateProfilePropsApi,
  updateProjectPinApi,
  updateTeamApi,
  updateTeamInvitationRoleApi,
  updateTeamMemberRoleApi,
  updateTeamPhotoApi,
  updateTempFileApi,
  updateWebhookApi,
  uploadFileMediaObjectApi,
  upsertFileObjectThumbnailApi,
  upsertFileThumbnailApi,
  verifyTokenApi,
} from "./api-funcs";
import { ApiRequestMethod } from "./utils";
import axios, { AxiosRequestConfig, Method as AxiosMethod } from "axios";

export class Api {
  personalAccessToken?: string;

  constructor(params: { personalAccessToken: string }) {
    this.personalAccessToken = params.personalAccessToken;
  }

  createAccessToken = createAccessTokenApi;
  deleteAccessToken = deleteAccessTokenApi;
  getAccessToken = getAccessTokenApi;
  loginWithLdap = loginWithLdapApi;
  loginWithPassword = loginWithPasswordApi;
  logout = logoutApi;
  prepareRegisterProfile = prepareRegisterProfileApi;
  recoverProfile = recoverProfileApi;
  registerProfile = registerProfileApi;
  requestProfileRecovery = requestProfileRecoveryApi;
  verifyToken = verifyTokenApi;
  exportBinfile = exportBinfileApi;
  importBinfile = importBinfileApi;
  createComment = createCommentApi;
  createCommentThread = createCommentThreadApi;
  deleteComment = deleteCommentApi;
  deleteCommentThread = deleteCommentThreadApi;
  getCommentThread = getCommentThreadApi;
  getCommentThreads = getCommentThreadsApi;
  getComments = getCommentsApi;
  getProfilesForFileComments = getProfilesForFileCommentsApi;
  getUnreadCommentThreads = getUnreadCommentThreadsApi;
  updateComment = updateCommentApi;
  updateCommentThread = updateCommentThreadApi;
  updateCommentThreadFrame = updateCommentThreadFrameApi;
  updateCommentThreadPosition = updateCommentThreadPositionApi;
  updateCommentThreadStatus = updateCommentThreadStatusApi;
  createDemoProfile = createDemoProfileApi;
  sendUserFeedback = sendUserFeedbackApi;
  createFile = createFileApi;
  createFileObjectThumbnail = createFileObjectThumbnailApi;
  createFileThumbnail = createFileThumbnailApi;
  createShareLink = createShareLinkApi;
  createTempFile = createTempFileApi;
  deleteFile = deleteFileApi;
  deleteFileObjectThumbnail = deleteFileObjectThumbnailApi;
  deleteShareLink = deleteShareLinkApi;
  getFile = getFileApi;
  getFileDataForThumbnail = getFileDataForThumbnailApi;
  getFileFragment = getFileFragmentApi;
  getFileLibraries = getFileLibrariesApi;
  getFileObjectThumbnails = getFileObjectThumbnailsApi;
  getFileThumbnail = getFileThumbnailApi;
  getLibraryFileReferences = getLibraryFileReferencesApi;
  getPage = getPageApi;
  getProjectFiles = getProjectFilesApi;
  getTeamRecentFiles = getTeamRecentFilesApi;
  getTeamSharedFiles = getTeamSharedFilesApi;
  hasFileLibraries = hasFileLibrariesApi;
  ignoreFileLibrarySyncStatus = ignoreFileLibrarySyncStatusApi;
  linkFileToLibrary = linkFileToLibraryApi;
  persistTempFile = persistTempFileApi;
  renameFile = renameFileApi;
  searchFiles = searchFilesApi;
  setFileShared = setFileSharedApi;
  unlinkFileFromLibrary = unlinkFileFromLibraryApi;
  updateFile = updateFileApi;
  updateFileLibrarySyncStatus = updateFileLibrarySyncStatusApi;
  updateTempFile = updateTempFileApi;
  upsertFileObjectThumbnail = upsertFileObjectThumbnailApi;
  upsertFileThumbnail = upsertFileThumbnailApi;
  createFontVariant = createFontVariantApi;
  deleteFont = deleteFontApi;
  deleteFontVariant = deleteFontVariantApi;
  getFontVariants = getFontVariantsApi;
  updateFcloneTemplateApiont = updateFontApi;
  cloneTemplate = cloneTemplateApi;
  duplicateFile = duplicateFileApi;
  duplicateProject = duplicateProjectApi;
  getBuiltinTemplates = getBuiltinTemplatesApi;
  moveFiles = moveFilesApi;
  moveProject = moveProjectApi;
  retrieveListOfBuiltinTemplates = retrieveListOfBuiltinTemplatesApi;
  cloneFileMediaObject = cloneFileMediaObjectApi;
  createFileMediaObjectFromUrl = createFileMediaObjectFromUrlApi;
  uploadFileMediaObject = uploadFileMediaObjectApi;
  deleteProfile = deleteProfileApi;
  getProfile = getProfileApi;
  requestEmailChange = requestEmailChangeApi;
  updateProfile = updateProfileApi;
  updateProfilePassword = updateProfilePasswordApi;
  updateProfilePhoto = updateProfilePhotoApi;
  updateProfileProps = updateProfilePropsApi;
  createProject = createProjectApi;
  deleteProject = deleteProjectApi;
  getAllProjects = getAllProjectsApi;
  getProject = getProjectApi;
  getProjects = getProjectsApi;
  renameProject = renameProjectApi;
  updateProjectPin = updateProjectPinApi;
  createTeam = createTeamApi;
  createTeamInvitations = createTeamInvitationsApi;
  createTeamWithInvitations = createTeamWithInvitationsApi;
  deleteTeam = deleteTeamApi;
  deleteTeamInvitation = deleteTeamInvitationApi;
  deleteTeamMember = deleteTeamMemberApi;
  getTeam = getTeamApi;
  getTeamInvitationToken = getTeamInvitationTokenApi;
  getTeamInvitations = getTeamInvitationsApi;
  getTeamMembers = getTeamMembersApi;
  getTeamStats = getTeamStatsApi;
  getTeamUsers = getTeamUsersApi;
  getTeams = getTeamsApi;
  leaveTeam = leaveTeamApi;
  updateTeam = updateTeamApi;
  updateTeamInvitationRole = updateTeamInvitationRoleApi;
  updateTeamMemberRole = updateTeamMemberRoleApi;
  updateTeamPhoto = updateTeamPhotoApi;
  getViewOnlyBundle = getViewOnlyBundleApi;
  createWebhook = createWebhookApi;
  deleteWebhook = deleteWebhookApi;
  getWebhooks = getWebhooksApi;
  updateWebhook = updateWebhookApi;
}
