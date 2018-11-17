import initialState from './initialState'
import types from '../actions/types'
import constants from 'src/consts/constants'
import slices from './sliceReducers/auth'

const auth = (state = initialState.auth, action) => {
  const {data} = action.payload || {}
  const {user, profile, identity} = data || {}
  const {client} = state

  switch (action.type) {
    /** -------------------------- set token -------------------------> **/
    case types.AUTH.SET_TOKEN:
	    return slices.setToken.base(state, action)
    
    case types.SUCCESS.AUTH.SIGN_IN:
      const {rememberMe} = action.payload
      const {organization} = data
      return {
        ...state,
        client: {
          ...client,
          userId: rememberMe
        }
      }
    case types.ERRORS.AUTH.SIGN_IN:
      const {message: errorMessage} = action.payload
      return {
        ...state,
        client: {
          ...client,
          error: errorMessage
        }
      }
    /** -------------------------- update user by user id -------------------------> **/
    case types.SUCCESS.USER.UPDATE_USER_BY_USER_ID:
      return slices.updateUserByUserId.success(state, action)
    /** -------------------------- update profile by profile id -------------------------> **/
    case types.SUCCESS.USER.UPDATE_PROFILE_BY_PROFILE_ID:
      return slices.updateProfileByProfileId.success(state, action)
    /** -------------------------- get posts by identity  -------------------------> **/
    case types.SUCCESS.COMMON.POST.GET_POST_BY_IDENTITY:
      return slices.getPostByIdentity.success(state, action)
    /** -------------------------- create post  -------------------------> **/
    case types.SUCCESS.COMMON.POST.CREATE_POST:
      return slices.createPost.success(state, action)
    /** -------------------------- delete post  -------------------------> **/
    case types.SUCCESS.COMMON.POST.DELETE_POST:
      return slices.deletePost.success(state, action)
    /** -------------------------- get followers  -------------------------> **/
    case types.SUCCESS.COMMON.SOCIAL.GET_FOLLOWERS:
      return slices.getFollowers.success(state, action)
    /** -------------------------- get followees  -------------------------> **/
    case types.SUCCESS.COMMON.SOCIAL.GET_FOLLOWEES:
      return slices.getFollowees.success(state, action)
    /** -------------------------- delete follow  -------------------------> **/
    case types.SUCCESS.COMMON.SOCIAL.DELETE_FOLLOW:
      return slices.deleteFollow.success(state, action)
    /** -------------------------- delete follow  -------------------------> **/
    case types.SUCCESS.COMMON.SOCIAL.CREATE_FOLLOW:
      return slices.createFollow.success(state, action)
    /** -------------------------- get exchange membership by member identity -------------------------> **/
    case types.SUCCESS.COMMON.EXCHANGE_MEMBERSHIP.GET_EXCHANGE_MEMBERSHIP_BY_MEMBER_IDENTITY:
      return slices.getExchangeMembershipByMemberIdentity.success(state, action)
    /** -------------------------- delete exchange membership  -------------------------> **/
    case types.SUCCESS.COMMON.EXCHANGE_MEMBERSHIP.DELETE_EXCHANGE_MEMBERSHIP:
      return slices.deleteExchangeMembership.success(state, action)
    /** -------------------------- get work experience by user id  -------------------------> **/
    case types.SUCCESS.WORK_EXPERIENCE.GET_USER_WORK_EXPERIENCES_BY_USER_ID:
      return slices.getWorkExperienceByUserId.success(state, action)
    /** -------------------------- create work experience by user id -------------------------> **/
    case types.SUCCESS.WORK_EXPERIENCE.CREATE_USER_WORK_EXPERIENCES_BY_USER_ID:
      return slices.createWorkExperienceByUserId.success(state, action)
    /** -------------------------- delete work experience by user id -------------------------> **/
    case types.SUCCESS.WORK_EXPERIENCE.DELETE_USER_WORK_EXPERIENCES_BY_USER_ID:
      return slices.deleteWorkExperienceByUserId.success(state, action)
    /** -------------------------- get education by user id  -------------------------> **/
    case types.SUCCESS.EDUCATION.GET_USER_EDUCATION_BY_USER_ID:
      return slices.getEducationByUserId.success(state, action)
    /** -------------------------- create education by user id -------------------------> **/
    case types.SUCCESS.EDUCATION.CREATE_USER_EDUCATION_BY_USER_ID:
      return slices.createEducationByUserId.success(state, action)
    /** -------------------------- delete education by user id -------------------------> **/
    case types.SUCCESS.EDUCATION.DELETE_USER_EDUCATION_BY_USER_ID:
      return slices.deleteEducationByUserId.success(state, action)
    /** -------------------------- reset  -------------------------> **/
    case types.RESET:
      return initialState.auth
    default:
      return state
  }
}

export default auth