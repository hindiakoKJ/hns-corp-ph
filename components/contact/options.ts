// Products and concerns offered on /contact. Shared by the form (client) and
// the /api/contact route (server), so the server only accepts listed values.

export const CONCERNS: Record<string, string[]> = {
  'HNS PH Solutions': ['Custom build', 'Partnership inquiry', 'Press / Media', 'General question', 'Other'],
  Clerque:      ['Sales inquiry', 'Technical support', 'Feature request', 'Bug report', 'Other'],
  SariAssist:   ['App feedback', 'Bug report', 'Other'],
  CVAssist:     ['App feedback', 'Bug report', 'Feature request', 'Other'],
  Steady:       ['App feedback', 'Bug report', 'Privacy concern', 'Other'],
  LOCATR:       ['Landlord inquiry', 'Renter inquiry', 'Partnership inquiry', 'Bug report', 'Other'],
  AltSpaceCW:   ['Operator inquiry', 'Sales inquiry', 'Technical support', 'Bug report', 'Other'],
  Scatto:       ['Event setup help', 'Sales inquiry', 'Bug report', 'Feature request', 'Other'],
  Everafter:    ['General inquiry', 'Sales inquiry', 'Bug report', 'Feature request', 'Other'],
  KonekBarangay:['LGU inquiry', 'Partnership inquiry', 'General question', 'Other'],
};

export const PRODUCTS = Object.keys(CONCERNS);

/** Name of the hidden honeypot field. People never see it; form-filling bots do. */
export const HONEYPOT_FIELD = 'website';
