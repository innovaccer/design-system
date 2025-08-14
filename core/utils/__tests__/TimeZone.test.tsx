// Ensure date calculations are performed in UTC irrespective of the host
// environment. Setting `process.env.TZ` before any date is instantiated forces
// Node to use that timezone.
process.env.TZ = 'UTC';

describe('Timezones', () => {
  it('should always be UTC', () => {
    expect(new Date().getTimezoneOffset()).toBe(0);
    expect(Intl.DateTimeFormat().resolvedOptions().timeZone).toBe('UTC');
  });
});
