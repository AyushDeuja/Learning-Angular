import { RoleBasedAccess } from './role-based-access';

describe('RoleBasedAccess', () => {
  it('should create an instance', () => {
    const directive = new RoleBasedAccess();
    expect(directive).toBeTruthy();
  });
});
