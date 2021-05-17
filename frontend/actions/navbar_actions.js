export const ACTIVE_NAVBAR = 'ACTIVE_NAVBAR';
export const INACTIVE_NAVBAR = 'INACTIVE_NAVBAR';

export const activeNavbar = navbar => {
  return {
    type: ACTIVE_NAVBAR,
    navbar
  };
};

export const inactiveNavbar = () => {
  return {
    type: INACTIVE_NAVBAR
  }
}