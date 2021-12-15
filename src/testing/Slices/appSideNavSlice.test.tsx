import appSideNavSliceReducer, { changeSelectedTab, DefaultState } from '../../features/appSideNavSlice'


  it('should handle the changes in the tab selection of the AppSideNav', () => {
    const previousState: DefaultState ={selected: ''};
    expect(appSideNavSliceReducer(previousState, changeSelectedTab('Dashboard'))).toEqual(
      {
        selected: 'Dashboard'
      }
    )
    expect(appSideNavSliceReducer(previousState, changeSelectedTab('User'))).toEqual(
      {
        selected: 'User'
      }
    )
  })
