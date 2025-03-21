// Static internal data with single root node (hidden)
var defaultData = [{
  "name": "Family Multi-Tree application (ver. 2.6, 21.3.2025)",
  "id": "root",
  "parents": null,
  "hide": "yes",
  "type": "r",
  "bdate": "",
  "ddate": "",
  "place": "Plovdiv, Bulgaria",
  // Will be used as startup map view when it is in root node
  "location": "42.14715,24.751004,11",
  // This field will be converted internally from location field of the file
  // it has to exist in default data because it will not be converted like at file
  "loc": {
    "lat": 42.14715,
    "lon": 24.751004,
    "zoom": 11,
  },

  // Will be used as default favicon icon when it is in root node
  "photo": "data:image/x-icon;base64,AAABAAEAGxsAAAEAGABwCQAAFgAAACgAAAAbAAAANgAAAAEAGAAAAAAAAAAAADUAAAA1AAAAAAAAAAAAAAD////////+///////+/v7+///+//78//39/vz//vz//vn+/vf+//j9/vf9/vb+//j+/vn9/fz9/P79/f79/v39/vz+//3+//7///////////8AAAD//f/9//z7///+/v/9//37/v39/P/+/fv+//Lv79jOz6e8u3+4s3exq26ztnO6vH7Qzqfu8Nf+/fP9/vj7//j//v3+/f77/v3+//7//f8AAAAAAAD+/v/+//36///+/f///P78/fz9/vfm5cWxsXSrqnLExJve37zs6s7u7Nrn6NDe377DwZmoqW+zrnnn5sb+/vL//P39/f/+/v7///v//v3///4AAAD8//7////+/v/9///9/P38/OnHwY+tom3f2rb5+OP8/fH8+/P8/fn/+/3/+vj/+vH//PP7+Obe2bSopWrBwYz7++n9/vn///v//v38//z///4AAAD7/v///P///f/7//v09OCvr36SgFSLZE2VdGnCtLPXysecfHrv4uP25OifbG2ZaGbauL3qw8mYYlunfl6wnGa2sX/29d39/Pn+/P/7/v79/v4AAAD8/v/8/f7//fz8++m0r3/Ny6T77uiPUlaxenb/8+/t0dN9OT7RoqLhych+JCa0YFydYF7HfnyHJCPAcWqOb1LLxpOzsYH7++r//P79/v79/voAAAD7/vr7/vz+/vbDwJC/uojv6Nn37PDOkpuYVFb25uD53OCeSlOdSk301dCXQEGZPzzNioTotK2MLyqxV1XQoJj++N+6uYjFwpH+/vX7/vv+/v4AAAD8/fn9/frl5salp2/w6sxtU0rVwL/wydB0MjPp0MnStbuJPkypVFzBkZTMjZOyZ2qLSUq7j4y5goHFen5tLS3p1Mv7/eGnpW/m5sn5/vr8/f0AAAD+/f3//vKwr3Xb3Lvy5uB9WlX45N775OWJR0jWp6D57vHWtb7asbV+V1m5mZ7LrK+mjI7Yycr16u26nZ6liIT15+P6/vXb2rmzrnn+/vL9/fsAAAD9/vrv79SuqXL7+uv89Pm9oJ+afnrlz9KdXmKobGno3Nnv6ef/+vjr5ubw7Oz9/Pz++/3+/P76/Pz7/fz9/fn//fz9+v36+eSpqGzw79T+/vwAAAD8/vjQzqTDw5r8/vX9/Pz68fDFrrOojpSigICifXuljIp7aWjk4OD7/f35/f77/f7+/P7++/77/fv7/vv6/Pr+/f7+/P7///G/wZfO0aj+/voAAAD8/vnBuoLj4sL7/vn4/vz2/Pv6/P39/P36/Pv8/fr18e6Zi4va1dX9/Pz6/P38/P78/P7++////fv7/v34/P78/v76/vz+//ji38C6voX9//gAAAD8/vi7s3Ts6tH//vz9/fz5//37/f7+/P77/fz7/vv8/fv8+/z9+/z7/P74/P37/f3/+/z//f7+/fz7/v75/v/7/f74/vz4/vrq6NC2t3X8//YAAAD8/vesrGzt7Nf//P3//f/9/vz8/f3+/P///fv9/fr3/Pv3/Pz9+//9+v76+/75/vz8/fv8/v38/v77/v37/v77/P/4/f34/vrt7NWyr23+//cAAAD//vi3s3jr6dD//fv++/79/Pz7/v77/P77/Pz4/fz3/f32+vr9/P3/+/3+/f36+/v4/fz4/f37/f3+//7+/v78/P/9/v37//jp6cy4tnj//vgAAAD//vi8uYTd4MH8/vn5/f33/f34/f3+/f7/+/79+/79+vvx7OnTxsHs3tv//Pn9+vv++fz/+vv/+ff/+Pf++/z8/f3+//z+/vff4L+9vYX9/vkAAAD+//rPzqXAwpn//vT9/f38+/zOxMeZeHubdnvKvr//+vrOvr5pRkeFYGHy3d7k0tPOtbjq0tWVb26liYjk3+D8/fz+/vv///TBwZbPz6f9/voAAAD7//rx79WopXL6+en8/f38+vz37fGoc3mVVljx5Nz9+/f39PXy5OqwkZmyjJLXqKiUU1Hku751MTXUqqj39fP8/f78/v35+uWnp2/v79b///wAAAD4/f7//vW0r3nd3rn6/fb06O6mjZfan6d1MTHp1sv18ur1+Pf+9/377vSufIDXjIuVMy/aj5CjU1XAjIj/+fj+/f7+/vna27iwsnX///H+/v0AAAD8/fz+/Pzl5cOmqWz9/ubn1NpjPUb4x81/MDOsaGWKbWje1dTQub3Xv8TXp6q9X2LBY2HKfXuzW1qjYFr/8e3//v39/uimpnHm5cT+/vr///8AAAD///f4/vj9/vPBwpC8vI3v3dZsS1L31NqsXGO4aGvKsa7dy8mIV1fStrXfwcCKLzK+e3ftw8SYREaMOjT+5dz///G6u4rDxJL//fj9/f7///8AAAD///j6//v+/f77++yxsYDPyKOvmZSUdny2dX6cWl755uS6n5uaYWOid3bnx8KEODe3gn7+7/LOnqBnIBrszLrJy56usn/7++j+/fv+/f7///8AAAD+/v3//f//+////f3z9d6zr3+/uY63p5KZdnSPaGqfgoGUenfXvr7LsbCdfnuQaGbLrKz/+Pn78uu2lHmdglK1s4H09uH6//z8/vv//v7//v4AAAD+//7//f///f////75//v6++nEw5KpqnHf2Lb69OL+9+38+PD7/fT7/fb99vT99vL/+vH7+ubc3riopGzIwZD9/Oj+/vv6//37//////////8AAAD+//v///4AAAD+//75/v37/vv+/vTm5sa0sXyupnTFwprf4cDp6c7s7NTq6s/f4L/EwpqrqXKus3bn5sX///P9//n+/f7//P/9/v////3///8AAAD7///////+//7////+/v76/fv6/fv9/fv//fXv7tXQz6a5u4a2tXyzrnK4t3a9v4TP0Kfw7dj/+/T++/3+/v/8//3+/P//+v/+/v////3///8AAAD7//79///9//z//f79/P/7/f/7/f36/fz8/fv9//r6/fv+/vr8//j8/vf8/fn//vj+/vb5//b3/f34/f/8/vz+//z9//z///v9//wAAAD///8AAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAEA=",
  "description": "",
  "font": "12px sans-serif",
  // First value in range 20 - 60 pixels when it is in root node
  // First value in range 1.0 - 2.0 as scale factor when it is in node to highlight
  // next 2 values values are horisontal and vertical inter-text space in pixels,
  // next 2 values values are enable vertical multi-tree view, enable stacked the same level nodes,
  // last value is a vertical inter-node multiplier (default: 1 for horizontal and 3 for vertical views)
  "circle": "40,10,16,0,0,1",
  // This field is only informative and used in Excel file only to enable/disable the private data
  // the numbers are applied to bdate, ddate, place, location, photo and description fields respectively
  // the numbers for bdate and ddate fields can be: 0 (yyyy-mm-dd), 1 (yyyy-), 2 (-mm-dd) and 3 (none)
  // for all other fields the number has to be 0 (enable) or 1 (disable) corresponding field
  "privacy": "0,0,0,0,0,0",
/*Optional fields for language localization (data file root node only)
  Will overwrite date descriptors and timeline band labels
  Example is exemplary for Bulgarian language:
  "bdDescr_m": "роден",
  "bdDescr_w": "родена",
  "bdDescr_f": "брак",
  "bdDescr_c": "съжителство",
  "ddDescr_m": "починал",
  "ddDescr_w": "починала",
  "ddDescr_f": "развод",
  "ddDescr_c": "раздяла",
  "tlLabel_g": "Генерации",
  "tlLabel_f": "Семейства",
  "tlLabel_p": "Хора"
*/
}];

// Default date descriptors and timeline band labels
// will be overwritten from data file root fields bdDecr_x, bdDecr_x and tlLabel_x
var bdDescr  = {m: 'born', w: 'born', f: 'married', c: 'cohabitation'};
var ddDescr  = {m: 'dead', w: 'dead', f: 'divorced', c: 'separated'};
var tlLabels = {g: 'Generations', f: 'Families', p: 'People'};

// Maps and Timeline data staff
var dataPoints = [];
var dataEventsFamily = [];
var dataEventsPeople = [];
var timeSelected = null;

// Timeline Generation names can be changed hire for now
var dataTimelineGeneration = [
  {
    label: 'Generations',
    // Data labels for generations can be translated hire
    data: [{
      label: 'Depression Era',
      type: TimelineChart.TYPE.INTERVAL,
      from: new Date([1910, 1, 1]),
      to: new Date([1921, 12, 31]),
      customClass: 'green-interval'
    }, {
      label: 'WW II',
      type: TimelineChart.TYPE.INTERVAL,
      from: new Date([1922, 1, 1]),
      to: new Date([1927, 12, 31]),
      customClass: 'green-interval'
    }, {
      label: 'Post-War Cohort',
      type: TimelineChart.TYPE.INTERVAL,
      from: new Date([1928, 1, 1]),
      to: new Date([1945, 12, 31]),
      customClass: 'green-interval'
    }, {
      label: 'Baby Boomers',
      type: TimelineChart.TYPE.INTERVAL,
      from: new Date([1946, 1, 1]),
      to: new Date([1954, 12, 31]),
      customClass: 'green-interval'
    }, {
      label: 'Generation Jones',
      type: TimelineChart.TYPE.INTERVAL,
      from: new Date([1955, 1, 1]),
      to: new Date([1965, 12, 31]),
      customClass: 'green-interval'
    }, {
      label: 'Generation X',
      type: TimelineChart.TYPE.INTERVAL,
      from: new Date([1966, 1, 1]),
      to: new Date([1976, 12, 31]),
      customClass: 'green-interval'
    }, {
      label: 'Generation Y or Millenniums',
      type: TimelineChart.TYPE.INTERVAL,
      from: new Date([1977, 1, 1]),
      to: new Date([1994, 12, 31]),
      customClass: 'green-interval'
    }, {
      label: 'Generation Z',
      type: TimelineChart.TYPE.INTERVAL,
      from: new Date([1995, 1, 1]),
      to: new Date([2012, 12, 31]),
      customClass: 'green-interval'
    }, {
      label: 'Generation ?',
      type: TimelineChart.TYPE.INTERVAL,
      from: new Date([2013, 1, 1]),
      to: new Date([2029, 12, 31]),
      customClass: 'green-interval'
    }]
  }
];

// Internal Icons used in case of node photo lack
var specialPhotos = {
  empty:  "",
  root:   "data:image/jpeg;base64,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",
  men:    "data:image/jpeg;base64,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",
  women:  "data:image/jpeg;base64,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",
  family: "data:image/jpeg;base64,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",
  couple: "data:image/jpeg;base64,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",
  boy:    "data:image/jpeg;base64,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",
  girl:   "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCACgAKADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9/KKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKM4ooPSgAzQGBqnrOr2+g6XcXl3LHBa2qGWaVzhY0UZZifQAE/hXzV4z/a01L4h6zGvhWS50fRbeZZodSQQSPrERQ4O10cRwtvyCdspK/wAEP4OecSYLKaXtMXLV7JWu/RXR6OXZXiMbPkoL1b2R9Q7qM18nHWb/wAQag17ea94k+0SLysOs3dvD/37jkVB+AFZGteKL7w9c/a7XxF4mWaFhIiya3eTIGByMo8rKR7EEHuCOK+EreLmAprndGVvWN/uv+p9FT4LxMnZTV/R/wCR9kZozXw7p37cXjLwF44/tLUrqXxJo6wGGbSzHBbhcuCJkkWLd5gUMMM21hnoRkfXHwk+L+jfGjwjHrWizSS2rO0LrJGY5IZVOGRlPIIPfkEEMpZSGP03C3HmU5/eGCm1OO8ZWUrd7JtNeaZ5Gb8O4zLrOurxezV2vyR1VFFFfZnhhRRRQAUUUUAFFFFABRRRQAUUUUAFBOBRSMMqaAPlb9tz402+u+KIfAEC+ba2TQahqtxDebWhnVkkhtmRTzlSszBuMGLg7sr5ToviGP7QsbSbpgu6RhE5jzxwX27d3PC7txAJxjp0/wAdfg34g8dftVeIrvS7eCy0y6mie51O5HmRM0dvbxmNIhIrtIQow/8Aqx5bAksMVp+If2eLy08KQweHVsbrUvtDXFy+ozyxx3LNFHGWzHzHgQxKqgEAKSdx+Y/zZxJleaZxmOJxTi+WDlGCd9VF2VvJ7+Z+uZPLDYPB0qa3kk2/VX/4Bzd343h0y3VfMRmIxj0965fXvFf2lJGaVSWqfWvhJ4utbXULzUPDupWX2TC7raWK+jucD/ljHGzTY74ZAx9BzXm+q31zbNcxtvElrxPG3ElufSROqNweGAPB4r8b4goZnh3bFUpRXmmvzPssv+qzS9nJN+oviTV1l3bm4Jr1D/gnP8ToPCfx+uNFvNSaC08TWrxwW+zMdxepsdWJxhG8pJQMFQcgcnYF8B1rW9wOW71ys/xH1D4e+ILHxBpcipqmh3KX1q5Xd80fz7D7PjafYnpWPBeaVsuzihjIPaSv5p6NPy8jTPMHHGYOphn1Wnr0P2o3U4HIrxWw/bU8M+HNLtv+Eya48N39wXVIxDJeRzbRuJR4UYdOcMFJwcA4NejfDH4reH/i/wCHE1bw7qUeoWMnBOx4pYW/uyRuFeNuh2uoPI4r+8Vj8M6/1X2i9pZS5brms+tt7eex/PeKyvF4bWtTaXezt9+x0lFG4UV2HCFFFFABRRRQAUUUUAFFFFABQeRRQTgUAeO/EVlj8f3yru+UqSue5RDn9TVa21BIBk+nSsX4x6g1v8VdUUMw2+V09414/wA+tZNvqrMnLE1+Y4jHRjiaiS+0/wAz9VweXuWEpNveMfyR0up64GLbdykgjI4Irx/4zfCPS/iPaTXht7Wy1lVYxXyja2cABZMY8xDgKVbOBnbtbaw7i41HA+9WPqWpYDYbb9O1eLmsqWLpOlXSlFrZ2/r7j18DhHTd4nwL451j/hFtbvtPuJY/OsLiS2lZCXTejFWCttUtyPQH2HQcP4q8Qm6059u5mkUhQMHkjpx35xX2R4P+C1j8N/iJ4i8S+ZDcajrV481uwVv9Dhfy2eMKSVLGRWbdjPzAcDivmP8Aaqt9Ptv2otShtIY41kmtbu8iQbVWQwxzHH+8eTjuxz3r8ZocEyjiqPs5Xc6iio+Ten4I+upuVSagt2fUnxt+JVprEtvZ26iV2kATI6HgE/kWFbX/AAT5+JZ8D/tCzaLJMsVl4stmthGiJtmuohvidiV3DEayqAGwS/OcLt+WfA2vat4t8Y/2hcTMtrp+8OSo+ZnUgDHXpzmvZ/2R/DV54y/av8F/Y1Yx6VePf3DD+CJIXU5/4EyD6tX6Z4gZtGHiBl9LL5c0qUYwnbXVyd4v0i9jk4mwFKOWVcPPVKLfo1qvxP06jGVXr+NPpqDCDNOr+gI7an84BRRRVAFFFFABRRRQAUUUUAFB6UUUAfK/7Qluvhj456xm4maTV4oNREbsSqL5aW+Ez2zb5IHd8n7wzgWuuYT/AFnP1r1z9svwFJqHhK18RWOlte32is5upY5Ar29kI3lkbaeZMPHGdqgscnAPIPzdZeIlngWSOeOaOQBllQgrICMggjIwe3J4r8b4mozwuPm3tLVH7ZwpiIYvLoJfFD3WvTb8DtLjXP8App+tZOp6xuB/eE1gy6/+8wZBnsKo3esbYLiaR9lvb48xyOEycAY6kk8YGSTwATxXzVTEOWx9TDCpasz/AIm/Ey1+H2gSalcM01wzeRp1mkTSy6netxDaxoOXeRyqhRyc1R+Hn7PX/DNf7LevfE/4peG9L1b4qeOtQFrpdhrluLy3smfcY8xtkRtsWaYqWUiNY4vlcFT6d+yF/Y3iD4u6hceI9KhvRotu1/pTz26TR2jxuEa4ClDIs/zHYVHClxwTXCf8FSf2sdP8bX+h+C9DvLS+0u1/4mt3MIiHW4BkhWJtxDKyKXLAqCC69wcduIoxy/J6nEPNepFONNLZTel35rW1tj5TNMZXrZtTyuknGKtKT2bW+nk9vM+fLjWodN0+K3hxFDCm1VV+g78ep6k+tfTv/BIbw5b+I/iZ408RSXF011ounwaesI4hZLlzIzH1cG1XHPAc/wB4V8Maj4xXDfvfzr9Af+CJ3izR9U+G3jext5lbWrXUoLi9Uqd3lSRMITuxgjMcoAzwVOcZGfzTwnwn1niilVxLu0pS13bs+/W+vfQ6uNMRKGUzUerivldH28hwOT7U+mjaVBp1f2P6H4WFFFFABRRRQAUUUUAFFFFABTd3FDferzv9oL4pzfDvQLeHT7iyi1fUnIhWdRIFhQr5z7NylsBlUEHCtIhIK5FVCLlLlRvhcNUxFWNGkryexf8AiJ8Y7Hwrc3el2cLav4lis/tkOmI3l+Yhby1LylSqLuPPVtoJVHOFPyh8X/g9qnhuTVfFUEkd5bXEkt/faVCQF0pDvlkMUrbd6IBgIUUnOflGEHq2naoIIWuGuJLm6umM89xI+57l253MensqgBUXCqFAwMf4keId/wAPddXKqv8AZ9xyxwo/dNXPm+Q4bG4V08Qr21T6p+R+k5FgK2XS9pRer37HzZafGLw/f6SLjTLW/wBanljV44HBgXB6ZZh0HtnpVuw0bWPFN+l9qEn7mFjNbWkZC20GBx8q4DdsMwPqMdK6j4bfs8ppkSyXXK7QfMVyyyf7SnuD6+9d3ongyPxD4mtNHjSTy2JMxX/ljEF3MxYgqpIBCluC5A9cfgay2rOfsaa1vZL52P0GWaUaUHVm1ort9kcn8OtNuNC0PWvElreL9svEfQdMiKMm+Z2DNz0/1ghQZ45fkANU3xs/Y40v43/DLTbWT7Ppniqygt4RrXk+ZNc+UmwiXBBkDZ7nIIGOleiak9p9q0+HyTJY+G8Q2DXEYWV5kMkbXAKnDI6MdpKjJdmA5FU9e8ebUOMDJ7Ace1fumU8MUYZYsBioqUWrST2d9WfF4HD4rGY2WZR91yen+FbX9ex+Xnxy+EHiz4E+IpNN8QadJbs0rpDMsivHOoPDKVJxuGDhsHmu4/4J/ftyzfsafGK51S6tbjU/DevWyWWpWsNx5ZAEqstyqlcSSRqZdqHbkSSZYZyPtDxTo+j/AB/8I/2T4stopNJ1fdDp8yvsmXy5OX3Aj92XRdpOc4BGM18M/Fn9i3xR4b+McnhXwnomseJJJx5sEVhaPPJHGPLBZiq4VA0ije21RkZxnFfinFPhvi+HcQs6yF80Yu/LvKN3btrHW3fX5n0eIpU8Thp0sVbltr2tfdPyf3M/YD4FftxfC/8AaNbyvCfiuxvbzvZXCSWdznAJAjmVWbGeqgg9QSK9Ygn85N3bpX5v/sm/8EPIx5OqfF3UI7qMhHj0TR7p41ZSmStzNtVgQzFdsWCCgYSn7o/Qf4efD7SPhV4H0vw54fsY9N0XRbdLWzto87YY1GAMsSx9SSSSck5PNfqPC+PzbF4f2maUVTfSzd36xd7fefi+cYbBUavJgpuS8/8APr9xu0UUV9QeOFFFFABRRRQAUUUUANY4NfIP7VfxS/tn4+X2lxiPyvC9ilr5m0B0nuEE0q5z90xm2P1r6+fr+FfnT+0l4mvLj44+KL24tZLZb2/lijkyCJlgItsg+3lY9eMGu7AJOrqfacCUKdXMrVHryu3m9F+TZ6H4K8ZteeG9P8yYM32dMse52gf0Nbk/2fxFbNZTSbYbxDDIQeQrDBx+BPqOPxrwzwt4p+xWEMe5v3aKnX0rpLbxodq/M/Hoa9iVO65T9XrZZeLj3PbtNOh21pDDfXur6e9qBCYbe1je3bAILJsSQqhxlQzLtUgYXG0ZXiLx5YaLpkth4dsY9LstSQpqVzKwa8u1X5UXdly2VyCXOQpwoQ4ZfLr74gySx7dzcj1rA1XxiSHbc249815OHyLC0qntYwV/Q8KjwgnJe2qSlFfZb0/4J2OseNI7eGOG32wxQqERFwFQDgAAdgK5XXb/AFTxtfadoek3H2e/1q5+zx3BPEChHkkf8I4359a43UvFTSy/ebrXLaX8UZrX4j6pbqzBP7GNsrZxtd7iJmYe/lgrnrjNevL3VZH19TDunR5KejeiPS/G/i+E3zR6X5dvY2OLbT0T7sUEeFjPJPzbRk+pOa2dE+PH/Csf2h/Bfiy3WFbfXJ00rVpJCNsNpcGHe2SQBskWJyfSM14dqnidtzLvbk8Zqn8RNTXUPhppcci7lkMyMP7wLP1P4VhON0otCxGVU61JYaS0acX6Nb/gj9hICrRLtYNx19amVq8L/ZU+JlxL8BfAq3tzJeXX/CPWBnnY7jM32aPcxz3LEn869o03VotTgV0b73Y14Mo2bR/NOIpOlVlTfRtfcXqDRSE8/hUmItFFFABRRRQAUUUUANfqK+df2sv2TdS+Ifh25bwt9hSaW4a+MF07AwzswZ5YiFbJdfMUxnC5fcCCMH6Mpsib16ZqoycXzI6MLiZ4etGvT3i016o/It/EV54avZrHUrK803ULN/LuLO5Xy5oHH8LA9++RwQQRwQTetvH4J4LZ9Plr9Av2jf2KPB/7RNs891a/2PrrzJcPq2nokV1OUQoqSttPmJjb8p/urgjAr4f+MX/BP34pfCOa4mtNNXxVpfmsY59KcyT+XyRuhPzhsDkIH5OAT2+hw+YUqmk9Gfv2Q8b5ZmMVTxLVKp5/C35P9Dn5PH4I6t+lZepeO1ZG+9+leb6vrt1omqzWN5HcWd7AxSS2nRo5omHVWRgGBHoQDWbd+JpHB+Zxu4BI616ShF7H6Bh8FTqJTg018megT+Ld/wAobbuPXjiuS0fW1n1PU79vvTz+WpOMhVGPw7dK5+fWJmgZizcDuDium+HfwK8V+OtAhvdPtFexuC7rM86KrHcVOBu3dVx07Vz16aj703ZHLmX1PBxVXGVIwjfdu132V+vkQ3/ipfm+8T7Vq6nFfeLfAmh2ljBc3M0srgJHHvLDzJBzjoBnk9q6rw1+ymv20rruuWv7vPm2mnuZrrPYKu3OfwPGa+gvg/8Asha74m02zstB0m60PR7dMPf348u5nVmJ2j+LnJJyAPlWuCtjaNP+Hqz4PO/EXLMLFLL/AN7Nddorprfc1v2ffGNx4d8A+HdIkjma6sLCK2dVGeVABA+h4r6p+FulalfWMN1cfuYWG4K4w3f2rP8Ag/8Asx6H8M9Nh3Qre3cfV5lDc+xxmvT4olgQKqhVHQDoK8OUru5+CYis61WVWW8m2/V9vIdRRSFsNUmQtFFFABQaKKACiiigAooooAQLikaBXbnn27U6igDj/HP7Pvgf4mbj4h8J6BrTMSS95ZRzNk+7DNefal/wTc+Cmqk7/A9rDk5xb391bgfQRyqAPYcV7jRWkak1s39520cyxdFWo1ZRXlJr8mfP7/8ABLv4HMwP/CGzLj01u/8A/j9dT4d/Yi+GXhXSYbCx8OzQ2VuCEgbVbySMZYseGlI6knn1Ner0USqzkrSbY8VmmMxMVDEVZTSd7Sk2r99Xucn4Z+BPg7wawbS/DekWbr0dLdS/13HJzz1611EFslsu2NdqgYAFSUVmcIm2loooAKaeXp1NI+b8qAHUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAH//2Q=="
};

// About strings
var aboutStrings = {
  title: 'Developed by Christo Radev',
  html:  `<pre style="text-align:left;">
This software is implemented thanks to:
* Data-Driven Documents (d3.js) library,
* OpenLayers dynamic maps framework,
* OpenStreetMap foundation & contributors,
* d3.js timeline chart by Genscape, Inc.,
* and many other libraries and demos.

It works well with:
* Google Chrome 14 and higher,
* Mozila Firefox 7 and higher,
* MS Edge  ver. 83 (on Windows 10 64-bits),
* localy - file loaded directly in browser,
* globally - via web server over Internet.

Private CSV/JSON data can be secured by:
* using local files only or
* protected Internet place.
</pre>`
};

// Help strings
var helpStrings = [
  { title: 'Help',
    html:  `<pre style='padding: 0 0 0 25%; text-align:left;'>
FM Tree is a single (not yet) file HTML 5 application (FMTree/index.html)
It can be run from local file or from web server in Intranet/Internet
It works well on any modern web browser like Google Chrome, Mozilla Firefox etc.
Internet access is required only for downloading the software dependencies
It uses CSV or JSON formatted data files to present advanced multitree charts
In addition to the multitree chart world life maps and timeline can be presented
Data file could be kept confidential as a local file resource
It could be shered optionally with restricted or public access
Multitree chart can be exported as PNG or SVG immage wih very high resolution
Visual presentation of multitree can also be kept private or public

Preparation of data file acceptable by FM Tree application can be done on any PC
CSV or JSON formatted data file are used with FM Tree application
For multilanguage suppot CSV or JSON file has to be with UTF-8 character set
CSV data file has to be with header row, comma separated fields and LF only line delimiters
JSON data file has to contain strictly formated arrea of objects (for persons and families)
MS Excel or other application supporting Excel format can be used for facilitation
MS Excel file is not required if working with CSV or JSON formatted file is acceptable
Data file name can be any but extension has to be *.csv or *.json respectively
Data file content is not verified for valid FM Tree application data
Openning file with invalid data content may bring to wrong application behaviour
</pre>`
  },
  {
    title: 'Help',
    html:  `<pre style='padding: 0 0 0 25%; text-align:left;'>
1.    Usage of FM Tree application (FMTree/index.html)
1.1.  Mouse activities in chart area
      Dragging CSV or JSON data file from local storage to dashed area will open it
      Single left mouse button click on node circle or text will highlight tree connections
      Double left mouse button click anywhere will zoom-in
      Double left mouse button click while Shift button is pressed anywhere will zoom-out
      Single left mouse button click anywhere and drag will move the chart
      Wheel mouse button rotation forth or back will zoom-in or zoom-out respectively
      The same zoom-in/out and pan functionality is applicable for life maps and timeline
      The difference is that tree chart and life maps are 2D while timeline is 1D
      Other difference is that only tree chart nodes have on mouse click activity
      More information will be shown while moving mouse over tree chart and timeline nodes
      Browser window resizing will re-draw the chart to dafault state at new window size
      Window resizing is debounced with 0.1 sec timeout so some delay is observed
      Resizing the window to too small size will make chart to run out of visible area
1.2.  Touch devices (not implemented yet) specifics
      Zoom and pan funtionality may have strange behaviour sometimes
      Open data file may have strange behaviour for some devices
      Drag-and-drop data file may not be possible
1.3.  Key shortcuts
      F5 or browser refresh will re-draw the chart to dafault state (100%)
      Space or Enter will confirm default choice in About and Help
      ESC will exit from About, Help, close main menu and remove highlighted node and paths
      Ctrl+F1 - Help
      Ctrl+F2 - About
      Ctrl+F3 - Open Chart (browse for local CSV/JSON data file)
      Ctrl+F6 - Save as PNG (export chart as image file named oppend-file-name+ext.png)
      Ctrl+F7 - Save as SVG (export chart as image file named oppend-file-name+ext.svg)
      Ctrl+F8 - Close Chart
      Ctrl+F9 - Show/Hide Maps
      Ctrl+F10 - Show/Hide Timeline
1.4.  Button and menu functionality
      Browse button in top left corner will open dialog window to choose and open data file
      Clicking on application icon (FMTree) in top left corner will show About view
      Clicking on menu icon (≡) in top left corner will show/hide main menu
      Clicking on menu item will activate chosen action
      Clicking outside the opened menu will close it
      Menu items are self explained except:
        Get Public Data - will download public JSON data file
        Make Chart Visible - will fit whole chart in dashed area
1.5.  Other notes
      Loaded data file will be saved in the browser storage until session (tab) is closed
      Data file name can be added to FMTree application URL in form (CSV or JSON file is required):
        http(s)://WebServerNameOrIP(:port)/index.html?data=(File/Path/)DataFileNameWithExtension
        for example: http://localhost:8000/index.html?data=data/VasilLevski/Test-data-pub.json
        localhost can be used for local test purposes thanks to Phyton simple web server for example
      The two vertical markers in timeline show current (blue) and selected node (red) time
      Exported as PNG (in raster graphics format) chart will be magnified up to 16k pixels size
      For better resolution SVG (in vector graphics format) file can be used 
      SVG file can be opened in and printed from a web browser for example
      </pre>`
  },
  {
    title: 'Help',
    html:  `<pre style='padding: 0 0 0 25%; text-align:left;'>
2.    Use Excel to enter, save and edit FM Tree data (for example fmtree-data.xlsx)
2.1.  Following header row and node record with id/parents fields "root,null" are required
      name,id,parents,hide,type,bdate,ddate,place,location,photo,description,font,circle,privacy
      Family Trees,root,null,yes,r,,,Plovdiv,"42.129,24.788,11",,,20px Monotype Corsiva,"40,8,16,1,1,4","0,0,0,0,0,0"
      The field privacy is used only in Excel file and is optional for root node only
      Name field of root node will be used as application and window/tab title
      Photo field of root node will be used as window/tab icon
      Description field of root node will be used to store some notes about data
2.2   Multilanguage support can be done via additional fields in data for root node only
      English is default language for menu items and all text labels and descriptors
      Following additional fields for the root node only will overwrite date descriptors
      bdDescr_m,bdDescr_w,bdDescr_f,bdDescr_c,ddDescr_m,ddDescr_w,ddDescr_f,ddDescr_c
      Following additional fields for root node only will overwrite timeline labels
      tlLabel_g,tlLabel_f,tlLabel_p
      Menu items, left corner label text and generation names can not be changed from the data file
2.3.  NodeID has to be unique starting with a letter
      Built in image2dataURL.html UUID generator can be used
      Use id/parents (both are required for any node) fields to describe hierarchy
      Record order is important to get well looking multitree chart
2.4.  Any node has to be in chain finally linked to the "root" node
2.5.  Family (multiparent) nodes should have comma separated list of parent IDs in parents field
      Single parent node will have a single parent ID in parents field
2.6.  Visualisation order of nodes will follow records order in the data file
      first listed records will be upper in visualisation
2.7.  Two sets of invisible nodes are used to link floating nodes in appropriate level:
        for top linked nodes:				for bottom linked nodes:
        Invisible Up -3	iu-3	root	yes		Invisible Dn -3	id-3	root	yes
        Invisible Up -2	iu-2	iu-3	yes		Invisible Dn -2	id-2	id-3	yes
        Invisible Up -1	iu-1	iu-2	yes		Invisible Dn -1	id-1	id-2	yes
        Invisible Up 0	iu0	iu-1	yes		Invisible Dn 0	id0	id-1	yes
        Invisible Up +1	iu1	iu0	yes		Invisible Dn +1	id1	id0	yes
        Invisible Up +2	iu2	iu1	yes		Invisible Dn +2	id2	id1	yes
        Invisible Up +3	iu3	iu2	yes		Invisible Dn +3	id3	id2	yes
      The deepest level invisible nodes are only nodes linked to the root node
      They will be used to link the deepest nodes in the tree as well
      None of floating and the deepest tree nodes have to be linked to the root node
      Adding new level in the tree hierarchy will require new couple of invisible nodes
2.8.  All text fields can be entered in any language supported with UTF-8 character set
      Many languages can be used in a single data file
      Floating point numbers have to be dot delimited and without thousands separators
      Location field when applicable consist of a comma separated latitude, longitude and zoom factor
      Font field when applicable consist a space separated font type, size and family
      Font field in root node is applicable to all nodes texts and will overwrite it for other once
      In photo field only Data URL image source with Base64 encodding is acceptable
      </pre>`
  },
  {
    title: 'Help',
    html:  `<pre style='padding: 0 0 0 25%; text-align:left;'>
2.9.  The field hide can be yes, no, empty even missing for any node
        for root node:  yes     - hide root node and any links from hidden nodes
                        no      - show root node and any links from hidden nodes
                        empty   - like no except for the links sourced by root
                        missing - like no
        for other node: yes     - hide the node
                        other   - show the node
2.10. The field type can be a single letter: e(mpty), r(oot), m(en), w(omen),  f(amily), c(ouple), b(oy) or g(irl)
      In such case correct date description and  built-in icon will be used if photo is missing for any none hidden node
      Empty, missing or other letter for type field will make usage of blank image for none hidden nodes without photo
      Type field has no influence on hidden nodes
2.11. Date fields bdate (birthday) and ddate (death day) have to be in "yyyy-mm-dd" format in CSV/JSON data files
      Short forms like "yyyy-mm-", "yyyy-" or "-mm-dd" can also be used (do not omit first/last dash char)
      There are two sets of date descriptors for each person, family/couple
        descriptors for birthday  - (m)en: 'born', (w)omen: 'born', (f)amily: 'married', (c)ouple: 'cohabitation'};
        descriptors for death day - (m)en: 'dead', (w)omen: 'dead', (f)amily: 'divorced', (c)ouple: 'separated'};
        Persons descriptors can be different for both men/boy and women/girl depending on language specifics
      For being correctly exported to CSV the special Excel Date type has to be converted to text using formula:
        TEXT(DateCell;"yyyy-mm-dd") - where DateCell is cell containing Date type (for example in other Excel sheet)
        Text format for date fields is real alternative in case of problems to export data from Excel
2.12. The fields place (like "Town, Contry") and description (can be long) will be displaied in the node tooltip only
2.13. Location field when applicable consists of a comma separated list of 3 numbers (latitude, longitude, zoom factor)
      latitude and longitude are floating point numbers and can be taken from Google Maps
      Zoom field is integer number and 10 - 16 is a good value range. All of 3 numbers are required
2.14. The field circle for root node only has six comma separated numbers: 
        circle radius (for all circles), horizontal and vertical inter-text space in pixels,
        enable vertical multi-tree view, enable stacked the same level nodes and vertical inter-node multiplier
      The field circle for the highlighted node(s) is a single scale factor for the circle
      The field circle for all other nodes has to be empty
2.15. The field privacy has six comma separated 0/1 numbers for enable/disable private data publishing
        this field is used in Excel file only for filtering some of the private data
        they are applied to bdate, ddate, place, location, photo and description fields respectively
        numbers for bdate and ddate fields can be: 0 (yyyy-mm-dd), 1 (yyyy-), 2 (-mm-dd) and 3 (none)
        for the root node the rules are applied for all records by copying in the column
        for the root node the rules can be visible in CSV and JSON files to inform for filtering
        for any other node the rules have to be a copy of the root field or overwritten
        for any other node the rules are applied for the curent record only
        for any other node the field has to be empty in "For Converting" page of the Excel file
        Excel has problems with dates before year 1900 interpreting them as text and privisy logic may not work
      </pre>`
  },
  {
    title: 'Help',
    html:  `<pre style='padding: 0 0 0 25%; text-align:left;'>
3.    Preparation of photos for embedding into data files (preferable in JPEG format)
3.1.  Use any image editor to prepare photo files with 72 DPI for example
3.2.  Resize and crop it to fit well centered face in 300x300 pixels for example
3.3.  Use image2dataURL.html application to convert the photo to Data URL
3.4.  Data URL size should not be more the 32kB in length (limited by Excel)
3.5.  Copy & Paste photo Data URL quoted into the photo field of the data file
      "photo": "data:image/jpeg;base64,/9j/4AAQS...." (like in JSON format for example)
      Quotation marks are obligatory for CSV/JSON but do not use them in Excel data files
3.6.  In case of photo absence (empty or missing field) internal icon will be used
3.7.  Image embedded in the photo field of the root node will be used as window/tab icon
      </pre>`
  },
  {
    title: 'Help',
    html:  `<pre style='padding: 0 0 0 25%; text-align:left;'>
4.    Converting Excel, CSV and JSON formatted data files
4.1.  Install NodeJS (https://en.wikipedia.org/wiki/Node.js)
      Install NodeJS modules and dependencies they require
      * xlsx2csv module (https://github.com/zhs007/xlsx2csv/)
          npm install xlsx2csv -g
      * json-2-csv NodeJS module (https://github.com/mrodrig/json-2-csv) - optional
          npm install json-2-csv -g
4.2.  Check that instalation is o.k. - at command prompt run:
      * node -v     -> v12.11.1
      * xlsx2csv  -h -> Usage: xlsx2csv path ...
      * xlsx2json -h -> Usage: xlsx2csv path ...
      * csv2json  -h -> Usage: csv2json <csvFile> [options]
      * json2csv  -h -> Usage: json2csv <jsonFile> [options]
4.3.  Go to data files folder 
      * cd Path/to/data/files
4.4.  Convert Excel data file to JSON file (unreadable without line breaks)
      For been exported Exel sheet with data has to be first in the list of sheets
      At Command Prompt: xlsx2json fmtree-data.xlsx
      CSV data file (fmtree-data.json) will be created / overwritten
      drag-and-drop JSON file in FM Tree (fmtree-app.html) application
4.5.  Convert Excel data file to CSV file
      For been exported Exel sheet with data has to be first in the list of sheets
      At Command Prompt: xlsx2csv fmtree-data.xlsx
      CSV data file (fmtree-data.csv) will be created / overwritten
      drag-and-drop CSV file in FM Tree (fmtree-app.html) application
4.6.  Convert CSV data file to JSON file (readable with line breaks) - optional
      open CSV data file with PSPad (or other text editor) and do:
      * Click on main menu -> Format -> UTF-8 (menu item has to be checked)
      * Click on main menu -> Format -> Unix (LF)
      * Click on main menu -> File -> Save or use keyboard combination "Ctrl+S"
      At Command Prompt: csv2json fmtree-data.csv -o fmtree-data.json -f ","
      JSON data file (fmtree-data.json) will be created / overwritten
      Created file will be with UTF-8 character set and right delimeters
      drag-and-drop JSON file in FM Tree (fmtree-app.html) application
4.7.  Convert JSON data file to CSV file (optional)
      At Command Prompt: json2csv fmtree-data-in.json -o fmtree-data-out.csv -f "," -E ""
      CSV data file (fmtree-data-out.csv) will be created / overwritten
      Created file will be with UTF-8 character set and right delimeters
      drag-and-drop CSV file in FM Tree (fmtree-app.html) application</pre>`
  }
];

var showMaps = true;
var showTime = true;

// Use stored in sessionStorage showMaps and showTime variables
if (typeof(Storage) !== "undefined") {
  var showMapsStored = sessionStorage['showMaps'];
  if (showMapsStored) {
    // if stored - retrieve it
    showMaps = showMapsStored == 'true' ? true : false;
  } else {
    // if not stored - store default
    sessionStorage['showMaps'] = 'true';
  }
  var showTimeStored = sessionStorage['showTime'];
  if (showTimeStored) {
    // if stored - retrieve it
    showTime = showTimeStored == 'true' ? true : false;
  } else {
    // if not stored - store default
    sessionStorage['showTime'] = 'true';
  }
} else {
  console.warn('Sorry! Your browser does not support Web Storage ...');
}

// Write main HTML staff to document
// Table row and cell sizes (where applicable) are set in main.css or here
// Both Logo and Menu images in the control cell have to be 50x50px in size
document.write(`
  <table>
    <tr class='tr-controls'>
      <td class='td-controls'>
          <table><tr>
            <td class='no-borders' style="padding:0;" align="center" valign="middle">
              <img class='img-logo' onclick="clickAbout()" src="data:image/jpeg;base64,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">
            </td>
            <td class='no-borders' id='MainMenu' style="padding:0;" align="center" valign="middle">
              <div class="dropdown">
                <img class="dropbtn" onclick="toggleMenu()" src="data:image/png;base64,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">
                <div id="mainMenu" class="dropdown-content" style='text-align:left;'>
                  <pre class='menuItem' id="Help" onclick="clickHelp()"            >&#9;Help            Ctrl+F1</pre>
                  <pre class='menuItem' id="About" onclick="clickAbout()"          >&#9;About           Ctrl+F2</pre><hr/>
                  <pre class='menuItem' id="OpenChart" onclick="clickOpenChart()"  >&#9;Open Chart      Ctrl+F3</pre>
                  <pre class='menuItem' id="SaveChart" onclick="clickSaveChart('png')"  >&#9;Save as PNG     Ctrl+F6</pre>
                  <pre class='menuItem' id="SaveChart" onclick="clickSaveChart('svg')"  >&#9;Save as SVG     Ctrl+F7</pre>
                  <pre class='menuItem' id="CloseChart" onclick="clickCloseChart()">&#9;Close Chart     Ctrl+F8</pre><hr/>
                  <pre class='menuItem' id="ShowMaps" onclick="clickShowMaps()"  >`);

// write chacked menu items depending saved to Storage values of showMaps and showTime
if (showMaps) document.write(`✓&#9;Show Maps       Ctrl+F9</pre>`);
else document.write(`&#9;Show Maps       Ctrl+F9</pre>`);

document.write(`
                  <pre class='menuItem' id="ShowTime" onclick="clickShowTime()"  >`);

if (showTime) document.write(`✓&#9;Show Timeline  Ctrl+F10</pre>`);
else document.write(`&#9;Show Timeline  Ctrl+F10</pre>`);

document.write(`
                  <hr/><pre class='menuItem' id="GetData" onclick="clickGetData();" >&#9;Get Public Data</pre>
                       <pre class='menuItem' id="FitChart" onclick="clickFitChart();" >&#9;Make Chart Visible</pre>
                </div>
              </div>
            </td>
            <td class='no-borders' align="center" valign="middle">
              <div align='left' style='padding:2px;'>Drop data file to dashed area or&nbsp
                <input type="button" id="loadFile" value="Browse" onclick="document.getElementById('fileInput').click();" />
              </div>
              <div align='left' style='padding:2px;'>File chosen: 
                <label id="FileName" for="FileName" style="font-weight:bold;">No file chosen</label>
                <input type="file" style="display:none;" id="fileInput" accept="application/json, .csv" onchange="readFile(this.files)"/>
              </div>
            </td>
          </tr></table>
      </td>
      <td align="center"><p id="Title" style="margin:0; font-weight:bold; font-size:16pt;"></p>
      </td>
    </tr>
`);

if (showMaps) {
  document.write(`
    <tr>
      <td>
        <div id="map" class="map"></div>
      </td>
      <td>
        <div id="drop-area-big" class="drop-area-big">
          <div id="chart" class="chart"></div>
        </div>
        <div id="copyright" class="copyright" >©&nbsp<a href='http://www.radevs.net/~chradev/' target="_blank">ChRadev</a></div>
        <div id="summaryD" class="summaryD" ></div>
      </td>
    </tr>
  `);
} else {
  document.write(`
    <tr>
      <td colspan="2">
        <div id="drop-area-big" class="drop-area-big">
          <div id="chart" class="chart"></div>
        </div>
        <div id="copyright" class="copyright">©&nbsp<a href='http://www.radevs.net/~chradev/' target="_blank">ChRadev</a></div>
        <div id="summaryD" class="summaryD"></div>
      </td>
    </tr>
  `);
};

if (showTime) {
  document.write(`
    <tr class="tr-timeline">
      <td colspan="2">
        <div id="timeline" class="timeline"></div>
      </td>
    </tr>
  `);
}

document.write(`
  </table>
`);

// Debouncing reload at window.onresize
var timeout = false;
window.onresize = function () { 
  clearTimeout(timeout);
  timeout = setTimeout(function () { 
    location.reload(false);
  }, 100);
};

// Function to change dynamically favicon icon
document.head = document.head || document.getElementsByTagName('head')[0];
function changeFavicon(src) {
 var link = document.createElement('link'), oldLink = document.getElementById('dynamic-favicon');
 link.id = 'dynamic-favicon';
 link.rel = 'shortcut icon';
 link.href = src;
 if (oldLink) { document.head.removeChild(oldLink); }
 document.head.appendChild(link);
}

// Main menu staff
// Toggle between hiding and showing when clicks on menu image
function toggleMenu() {
  document.getElementById("mainMenu").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
function CloseDropdown (event) {
  if (!event || !event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};
document.addEventListener('click', CloseDropdown, false);
//window.onclick = CloseDropdown;

// Keyboard related (shortcuts) staff
document.addEventListener('keyup', function (event) {
  var key = event.keyCode ? event.keyCode : event.which;
  if      (key == 112 && (event.ctrlKey || event.metaKey))   { clickHelp(); event.preventDefault(); }       // Ctrl+F1
  else if (key == 113 && (event.ctrlKey || event.metaKey))   { clickAbout(); event.preventDefault(); }      // Ctrl+F2
  else if (key == 114 && (event.ctrlKey || event.metaKey))   { clickOpenChart(); event.preventDefault(); }  // Ctrl+F3
  else if (key == 117 && (event.ctrlKey || event.metaKey))   { clickSaveChart('png'); event.preventDefault(); }  // Ctrl+F6
  else if (key == 118 && (event.ctrlKey || event.metaKey))   { clickSaveChart('svg'); event.preventDefault(); }  // Ctrl+F7
  else if (key == 119 && (event.ctrlKey || event.metaKey))   { clickCloseChart(); event.preventDefault(); } // Ctrl+F8
  else if (key == 120 && (event.ctrlKey || event.metaKey))   { clickShowMaps(); event.preventDefault(); }   // Ctrl+F9
  else if (key == 121 && (event.ctrlKey || event.metaKey))   { clickShowTime(); event.preventDefault(); }   // Ctrl+F10
  else if (key == 27) {  // Esc
    // Close dropdown
    CloseDropdown(null);
    // remove all colour paths
    d3.selectAll('path.link').style("stroke", '');
    // coloring red circle
    d3.selectAll("circle")
      .style("stroke", function (o) {
          var ret = '';
          if (o && o.circle && o.circle != '')
            if (o && o.id != 'root' && o.circle && o.circle != '') ret = '#0f0';
          return ret;
      });
    if (showMaps) {
      map.getView().setCenter(ol.proj.transform([+root.loc.lon, +root.loc.lat], 'EPSG:4326', 'EPSG:3857'));
      map.getView().setZoom(+root.loc.zoom);
    }
    timeSelected = null;
    event.preventDefault();
  }
});

var svg;

// Set up the map and drop-area-big properties (it is required because of problems eith FF)
if (showMaps) {
  var parentRect = document.getElementById('map').parentNode.getBoundingClientRect();
  d3.select('.map').node().style.width  = parentRect.width - 4 + 'px';
  d3.select('.map').node().style.height = parentRect.height - 2 + 'px';
}

var parentRect = document.getElementById('drop-area-big').parentNode.getBoundingClientRect();
d3.select('.drop-area-big').node().style.width  = parentRect.width - 4 + 'px';
d3.select('.drop-area-big').node().style.height = parentRect.height - 4 + 'px';

// Set up the chart rectangle properties (it is required because of absolute positioning)
var parentRect = d3.select('.chart').node().parentNode.getBoundingClientRect();
d3.select('.chart').node().style.width  = parentRect.width - 4 + 'px';
d3.select('.chart').node().style.height = parentRect.height - 4 + 'px';
var bcRect = d3.select('.chart').node().getBoundingClientRect();
// Required for image export functionality
var graph = {
  left:   bcRect.left,
  top:    bcRect.top,
  width:  bcRect.width,
  height: bcRect.height
};

// Prototype of well working round function - usage: 12.3456.round(2) -> 12.35
Number.prototype.round = function(places) {
  return +(Math.round(this + "e+" + places) + "e-" + places);
}

// Main menu actions

// Export SVG chart as PNG image and save to local file

var landscapeOrientation = true;

var svgOffsetX = 0;
var svgOffsetY = 0;
var svgOffsetY1 = 0;
var circleRadius = 40;
var fileNameToSave = '';
async function clickSaveChart(type) {
  var svgNode = svg.node();

  // Append styles - very importent step!
  var cssStyleText = getCSSStyles( svgNode );
  appendCSS( cssStyleText, svgNode );

  // Prepare canvas and draw SVG as image
  // multiplier will make exported image high as resolution
  // There is a problem with final image size!!!
  // Image width and heigth has to be less than 16k
  // For overcoming the problem decrease the multiplier value
  var bbox = svgNode.getBBox();

  // Size of SVG graphics
  var swidth = bbox.width + svgOffsetY1; // + 2 * svgOffsetY;
  var sheight = bbox.height + 2 * circleRadius + 20;

  // Set multiplier to fit 16k size limit
  var multiplier = 16384 / Math.max(swidth, sheight);

  // Size of PNG image
  var width = multiplier * swidth;
  var height = multiplier * sheight;

  // Add text for exporting images - will be deleted after page reload
  svg.append("text")
      .attr("class", "text")
      .attr("dx", 2 * circleRadius - svgOffsetY - svgOffsetY1)
      .attr("dy", bbox.height - svgOffsetX + 80)
      .style("fill-opacity", 1)
      .attr("text-anchor", function(d) { return "left"; })
      .style("font", textFont)
      .text(document.title);

  svg.append("text")
      .attr("class", "text")
      .attr("dx", bbox.width - svgOffsetY - svgOffsetY1 - 2 * circleRadius)
      .attr("dy", bbox.height - svgOffsetX + 80)
      .style("fill-opacity", 1)
      .attr("text-anchor", function(d) { return "right"; })
      .style("font", textFont)
      .text('© ChRadev');

  svgNode.setAttribute('transform', 'translate(' + (svgOffsetY + svgOffsetY1) + ','+ svgOffsetX + ')');
  // Serialize SVG to XML string
  var xmlString = d3.select("svg")
      .attr({
          'xmlns': 'http://www.w3.org/2000/svg',
          'xmlns:xlink': 'http://www.w3.org/1999/xlink',
          version: '1.1',
          width: swidth,
          height: sheight,
      }).node().parentNode.innerHTML;


  // Temporary restoring the chart
  svgNode.parentNode.setAttribute('width', graph.width);
  svgNode.parentNode.setAttribute('height', graph.height);
  svgNode.setAttribute('transform', 'translate(0,0)');

  if (type == 'svg') {
    // Store data to SVG file
    var file = new File([xmlString], "FMTree.svg", {type: "text/plain;charset=utf-8"});
    await saveAs(file, fileNameToSave == '' ? "FMTree.svg" : fileNameToSave + ".svg");
    // Page reload is used to restore the chart
    location.reload(false);
    return;
  } else if (type != 'png') {
    return;
  }

  // Convert SVG string to data URL
  var imgSrc = 'data:image/svg+xml;base64,' + btoa( unescape( encodeURIComponent( xmlString ) ) );

  var canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  var context = canvas.getContext("2d");

  // Create Image and attach onload function
  var image = new Image();
  image.src = imgSrc;
  image.onload = function() {
    // Clear and paint white image background
    context.clearRect ( 0, 0, width, height );
    context.beginPath();
    context.rect( 0, 0, width, height );
    context.fillStyle = "#fff";
    context.fill();

    // Draw chart to raster image at canvas context
    // High resolution is achieved thanks to used size multiplier
    context.drawImage(image, 0, 0, swidth, sheight, 0, 0, width, height);

    // Convert canvas to blob and save it as PNG
    // async/await is used to prevent refreshing the page before SaveAs dialog
    canvas.toBlob( async function(blob) {

/*  Disable notification because it disappears before SaveAs dialog
      // Calculate file sise and inform the user
//      var filesize = (blob.size/(1024*1024)).round(2) + ' MB'; // Prototype is above
      var filesize = (blob.size/(1048576)).toFixed(2) + ' MB';
      Swal.fire({
        type:  'info',
        title: 'FM Tree chart export!',
        position: 'top-end',
        padding: '30px',
        html: 'FM Tree chart is written to file FMTree.png<br> in downloads folder with file size: ' + filesize,
      });
*/
      // FileSaver.js function
      await saveAs( blob, fileNameToSave == '' ? "FMTree.png" : fileNameToSave + ".png");
      // Page reload is used to restore the chart
      location.reload(false);

    }, "image/png", 1);
  };

  // helper functions - important to export complex SVG content
  function getCSSStyles( parentElement ) {
    var selectorTextArr = [];

    // Add Parent element Id and Classes to the list
    selectorTextArr.push( '#'+parentElement.id );
    for (var c = 0; c < parentElement.classList.length; c++)
        if ( !contains('.'+parentElement.classList[c], selectorTextArr) )
          selectorTextArr.push( '.'+parentElement.classList[c] );

    // Add Children element Ids and Classes to the list
    var nodes = parentElement.getElementsByTagName("*");
    for (var i = 0; i < nodes.length; i++) {
      var id = nodes[i].id;
      if ( !contains('#'+id, selectorTextArr) )
        selectorTextArr.push( '#'+id );

      var classes = nodes[i].classList;
      for (var c = 0; c < classes.length; c++)
        if ( !contains('.'+classes[c], selectorTextArr) )
          selectorTextArr.push( '.'+classes[c] );
    }

    // Extract CSS Rules
    var extractedCSSText = "";
    for (var i = 0; i < document.styleSheets.length; i++) {
      var s = document.styleSheets[i];
      
      try {
          if(!s.cssRules) continue;
      } catch( e ) {
            if(e.name !== 'SecurityError') throw e; // for Firefox
            continue;
          }

      var cssRules = s.cssRules;
      for (var r = 0; r < cssRules.length; r++) {
        if ( contains( cssRules[r].selectorText, selectorTextArr ) )
          extractedCSSText += cssRules[r].cssText;
      }
    }
    

    return extractedCSSText;

    function contains(str,arr) {
      return arr.indexOf( str ) === -1 ? false : true;
    }
  }

  function appendCSS( cssText, element ) {
    var styleElement = document.createElement("style");
    styleElement.setAttribute("type","text/css"); 
    styleElement.innerHTML = cssText;
    var refNode = element.hasChildNodes() ? element.children[0] : null;
    element.insertBefore( styleElement, refNode );
  }

}

function clickAbout() {
  Swal.fire({
    type:  'info',
    position: 'top-end',
    padding: '30px',
    title: aboutStrings.title,
    html:  aboutStrings.html
  });
};

/* Helper function to show multiple pages
   page is 0 based integer - first page to show,
   swalPages is arrea of objects with title and html members*/
function showSwalPages (page, swalPages) {
  if (page >= swalPages.length) return;
  swal.fire({
    type:  'info',
    position: 'top-start',
    animation: false,
    grow: 'fullscreen',
    confirmButtonText: page == swalPages.length - 1 ? 'OK' : 'Next',
    title: swalPages[page].title + ' (page ' + (page + 1) + ' of ' + swalPages.length + ' pages)',
    html:  swalPages[page].html
  })
  .then(result => {
    if (result.value) {
      showSwalPages (page+1, swalPages);
    }
  });
}

function clickHelp() { showSwalPages (0, helpStrings); };

function clickShowTime() {
  var item = document.getElementById("ShowTime")
  var showTime2store;
  if (item.innerHTML[0] == '✓') {
    item.innerHTML = '&#9;Show Timeline   Ctrl+F9';
    showTime2store = 'false';
  } else {
    item.innerHTML = '✓&#9;Show Timeline   Ctrl+F9';
    showTime2store = 'true';
  }
  if (typeof(Storage) !== "undefined") {
      sessionStorage['showTime'] = showTime2store;
  }
  location.reload(false);
};

function clickShowMaps() {
  var item = document.getElementById("ShowMaps")
  var showMaps2store;
  if (item.innerHTML[0] == '✓') {
    item.innerHTML = '&#9;Show Maps       Ctrl+F8';
    showMaps2store = 'false';
  } else {
    item.innerHTML = '✓&#9;Show Maps       Ctrl+F8';
    showMaps2store = 'true';
  }
  if (typeof(Storage) !== "undefined") {
      sessionStorage['showMaps'] = showMaps2store;
  }
  location.reload(false);
};

function clickOpenChart() {
  document.getElementById('fileInput').click();
}
function clickCloseChart() {
  sessionStorage.clear();
  location.reload(false);
}

function clickGetData() {
  if (window.location.href.startsWith("file")) {
    Swal.fire({
      type:  'info',
      title: 'Load FM Tree from a local file!',
      position: 'top-end',
      padding: '30px',
      html: 'You can load data using Open Chart menu function,<br>Crtl+F3 key combination, push Browse button<br>or drag-and-drop the file in dashed area'
    });
    return;
  }
  var request = new XMLHttpRequest();
  request.open('GET', 'FMTreePublicData.json', true);
  request.responseType = 'blob';
  request.onload = function() {
      var reader = new FileReader();
      reader.readAsText(request.response);
      reader.onload =  function(e){
        var text = reader.result;
        var blob = new Blob([text], {type: "application/json;charset=utf-8"});
        var filesize = (blob.size/(1048576)).toFixed(2) + ' MB';
        Swal.fire({
          type:  'info',
          title: 'FM Tree data download!',
          position: 'top-end',
          padding: '30px',
          html: 'Data have been written to file FMTreePublicData.json<br> in downloads folder with file size: ' + 
                filesize + '.<br>A number within brackets like (3)<br>may be added to the end of the name!'
        });
        // FileSaver.js function
        saveAs(blob, 'FMTreePublicData.json' );
      };
  };
  request.send();
}

function setDropArea(dropAreaName) {
    let dropArea = document.getElementById(dropAreaName)
    // Prevent default drag behaviors
    ;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
      dropArea.addEventListener(eventName, preventDefaults, false)   
      document.body.addEventListener(eventName, preventDefaults, false)
    })

    // Highlight drop area when item is dragged over it
    ;['dragenter', 'dragover'].forEach(eventName => {
      dropArea.addEventListener(eventName, highlight, false);
    })

    ;['dragleave', 'drop'].forEach(eventName => {
      dropArea.addEventListener(eventName, unhighlight, false)
    })

    // Handle dropped files
    dropArea.addEventListener('drop', handleDrop, false)

    function preventDefaults (e) {
      e.preventDefault()
      e.stopPropagation()
    }

    function highlight(e) {
      e.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
      dropArea.classList.add('highlight')
    }

    function unhighlight(e) {
      dropArea.classList.remove('highlight')
    }


    function handleDrop(e) {
      var dt = e.dataTransfer
      files = dt.files
      if (!files[0]) return;
      readFile(files);
    }

}

//      setDropArea("drop-area-small");
setDropArea("drop-area-big");

var count = 0;
var treeDepth = 1;

// Set up the tree properties
var tree = d3.layout.tree()
  .size([graph.height, graph.width]);

function zoom() {
  svg.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
}
var zoomListener = d3.behavior.zoom().scaleExtent([0.05, 5]).on("zoom", zoom);

var nodes;

function clickFitChart() {
  // Calculate params to fit chart and set them to zoomListener
  var xArray = nodes.map(function(d) {
      return d.x
  });
  var minX = d3.min(xArray);
  var maxX = d3.max(xArray);

  var yArray = nodes.map(function(d) {
      return d.y
  });
  var minY = d3.min(yArray);
  var maxY = d3.max(yArray);

  var scaleMinX = 0.90 * Math.abs((landscapeOrientation ? graph.width : graph.height) / (maxY - minY));
  var scaleMinY = 0.90 * Math.abs((landscapeOrientation ? graph.height : graph.width) / (maxX - minX));
  var scaleMin = Math.min(scaleMinX, scaleMinY);

  console.log(minX, minY, scaleMin);

  var startX = ((landscapeOrientation ? graph.width : graph.height) - (maxY - minY) * scaleMin) / 2 - minY * scaleMin / 0.95;
  // Vertical alignment may have a problematic!
  var startY = ((landscapeOrientation ? graph.height : graph.width) - (maxX - minX) * scaleMin) / 2 - minX * scaleMin / 0.95;

  // Set params to zoomListener
  zoomListener.translate([startX, startY]);
  zoomListener.scale(scaleMin);

  // Same as in the zoom function - execute to fit
  svg.attr("transform", "translate(" + [(landscapeOrientation ? startX : startY), (landscapeOrientation ? startY : startX)] + ")scale(" + scaleMin + ")");
  svg.call(zoomListener);
}

// draw the SVG container for the full graph
svg = d3.select('.chart')
          .append("svg:svg")
          .attr("left", graph.left)
          .attr("top", graph.top)
          .attr("width", graph.width)
          .attr("height", graph.height)
          .attr("preserveAspectRatio", "xMidYMid meet")
          .attr("pointer-events", "all")
          .call(zoomListener)
          .append("svg:g");

var diagonal = d3.svg.diagonal()
      .projection(function(d) {
        return landscapeOrientation ? [d.y, d.x] : [d.x, d.y];
      });

/*
  // extend d3 with moveToFront function
  // this function redraws the elements in order to put them always in the front
  d3.selection.prototype.moveToFront = function () {
      // normal move to front staff
//            return this.each(function () {
//                this.parentNode.appendChild(this);
//            });
    // reverce move to front staff
    return this.each(function() {
        var firstChild = this.parentNode.firstChild;
        if (firstChild) {
            this.parentNode.insertBefore(this, firstChild);
        }
    });
  };
*/

var nodesLayer = svg.append('g').attr('id', 'nodes-layer');

function LimitString(len, str) {
//  fileNameToSave = str.replace(/[/.]/g,'-');
  fileNameToSave = str.substring(0, str.indexOf("."));
  return str.length < len ? str : str.substr(0,len/2 - 2) +"..."+str.substr(str.length - len/2 + 1,len/2 - 1
);}

function readFileByName(fname, user, passwd) {
    var ms = Date.now();
    var request = new XMLHttpRequest();

    var fileName = fname.split('.');
    var fileType = fileName[fileName.length - 1];
    var blobType = '';
    if (fileType && fileType === 'json') blobType = "application/json";
    else if (fileType && fileType === 'csv') blobType = "application/vnd.ms-excel";
    else return;

    request.open('GET', fname + '?dummy=' + ms, true, username, password);
    request.responseType = 'blob';
    request.onreadystatechange = function() {
      if(this.readyState==4 && this.status==200) {
        var reader = new FileReader();
        reader.readAsText(request.response);
        reader.onload =  function(e) {
          var text = reader.result;
          if (text != '') {
            var blob = new Blob([text], {type: blobType});
            var filesize = (blob.size/(1048576)).toFixed(2) + ' MB';
            // Store data file in sessionStorage
            if (typeof(Storage) !== "undefined") {
              sessionStorage['fileName'] = fname;
              sessionStorage['fileType'] = blobType;
              sessionStorage['fileSize'] = text.length;
              sessionStorage['fileData'] = text;
              Swal.fire({
                type:  'info',
                title: 'FM Tree data loaded!',
                position: 'top-end',
                padding: '30px',
                html: 'Data with size ' + filesize + ' have been loaded.'
              })
              .then(result => {
                if (result.value) {
                  location.href = location.href.slice(0, location.href.indexOf('?'));
                }
              });
            } else {
              console.warn('Sorry! Your browser does not support Web Storage ...');
            }
          }
        };
      }
    };
    request.send();
}

const params = new URLSearchParams(document.location.search);
var stratupFileName;
if (params.has("data")) {
  stratupFileName = params.get("data");
  if (stratupFileName[stratupFileName.length - 1] == '/') stratupFileName = stratupFileName.substring(0,stratupFileName.length - 1);
  if (stratupFileName && stratupFileName != '' && !stratupFileName.toUpperCase().includes("Public".toUpperCase())) {
    var username, password;
    Swal.fire({
      type:  'question',
      title: 'Load: ' + stratupFileName,
      position: 'top-end',
      padding: '30px',
      html:
        '<input id="swal-input1" class="swal2-input" placeholder="username">' +
        '<input type="password" id="swal-input2" class="swal2-input" placeholder="password">',
      focusConfirm: false,
      preConfirm: () => {
          username = document.getElementById('swal-input1').value;
          password = document.getElementById('swal-input2').value;
      }
    })
    .then(result => {
      if (result.value) {
        readFileByName(stratupFileName, username, password)
      }
    });
  } else if (stratupFileName && stratupFileName != '' && stratupFileName.toUpperCase().includes("Public".toUpperCase())) {
    readFileByName(stratupFileName, '', '')
  }
}


// Use stored in sessionStorage data file after refresh/resize
if (typeof(Storage) !== "undefined") {
  var fileNameStored = sessionStorage['fileName'];
  if (fileNameStored) {
    // Create File object from stored data
    var fileStored = new File([sessionStorage['fileData']],sessionStorage['fileName'],
                  {type: sessionStorage['fileType'], size: sessionStorage['fileSize']});
    document.getElementById("FileName").innerHTML = LimitString(30,fileStored.name);
    readStoredFile(fileStored);
  }
} else {
  console.warn('Sorry! Your browser does not support Web Storage ...');
}

// Function to read local stored data file
function readStoredFile(file) {
  var reader = new FileReader();
  // Closure to capture the file information.
  reader.onload = (function() {
      var data = reader.result;
      if (file.type == 'application/json') {
          var json = JSON.parse(data);
          convertData (_.clone(json));
      } else if (file.type == 'text/csv' || file.type == 'application/vnd.ms-excel') {
          var csv = d3.csv.parse(data)
          convertData (_.clone(csv));
      } else {
        console.warn('Wrong file format: JSON and CSV files are supported!');
        convertData(defaultData);
      }
  });
  // Read the data file as a text
  reader.readAsText(file);
}

// Function to read opened/dropped data file - fist one from the file list
function readFile(files) {
  // File must be JSON or CSV
console.log(files[0].type);
  if (!files[0].type.match('text/csv|application/json|application/vnd.ms-excel')) return;
  var file = files[0];
  // FileName label is used instead of input type="file" to show file name
  document.getElementById("FileName").innerHTML = LimitString(30,file.name);
  var reader = new FileReader();
  // Closure to capture the file information.
  reader.onload = (function() {
      var data = reader.result;
      // Store data file in sessionStorage
      if (typeof(Storage) !== "undefined") {
        sessionStorage['fileName'] = file.name;
        sessionStorage['fileType'] = file.type;
        sessionStorage['fileSize'] = file.size;
        sessionStorage['fileData'] = data;
//        location.reload(false);
      } else {
        console.warn('Sorry! Your browser does not support Web Storage ...');
      }

      if (file.type == 'application/json') {
          var json = JSON.parse(data);
          convertData (_.clone(json));
      } else if (file.type == 'text/csv' || file.type == 'application/vnd.ms-excel') {
          var csv = d3.csv.parse(data)
          convertData (_.clone(csv));
      } else {
        console.warn('Wrong file format: JSON and CSV files are supported!');
        convertData(defaultData);
      }
  });
  // Read the data file as a text
  reader.readAsText(file);
}

var root;
var textFont = "12px sans-serif";
var charLen = 10;
var layerStacked = false;
var textOff = 16;
var textOff1 = 1;
var textOff2 = 1;
// Function to convert read data file in tree data structure
// and initialize SVG and other general staff
function convertData (fdata) {
  svg.selectAll("*").remove();
  nodesLayer = svg.append('g').attr('id', 'nodes-layer');
  // Convert data into parent child relationships
  var dataMap = fdata.reduce(function(map, node) {
    // will map nodes regarding id
    map[node.id] = node;
    return map;
  }, {});

  // Remove empty nodes
  for (var ind = fdata.length - 1; ind > -1; --ind) {
    var node = fdata[ind];
    if (node.name == '' || node.name == '\n') {
      const index = fdata.indexOf(node);
      if (index > -1) {
        fdata.splice(index, 1);
      }
    }
  }

  var treeData = [];
  fdata.forEach(function(node) {
    if (node.parents === "undefined") return; // because of empty JSON objects!!!

    // convert location data to oblect
    var loc = {place: "", lat: "", lon: "", zoom: ""};
    if (node.place && node.location) {
      var locs = node.location.split(",");
      loc.lat = locs[0];
      loc.lon = locs[1];
      loc.zoom = locs[2];
    }
    node.loc = loc;

    // convert parents to chidren relationship
    var parents = node.parents ? node.parents.split(",") : [null];
    parents.forEach(function(par) {
      var parent = dataMap[par];
      if (parent) {
        (parent.children || (parent.children = [])).push(node);
      } else {
        treeData.push(node);
      }
    });
  });
  root = treeData[0];
  var numParams;
  if (root.circle && root.circle != '') numParams = root.circle.split(',');
  if (numParams[0]) circleRadius = 1 * numParams[0];
  if (numParams[1]) charLen = 1 * numParams[1];
  if (numParams[2]) textOff = 1 * numParams[2];
  if (numParams[3] && numParams[3] === '1') { landscapeOrientation = false; textOff1 = 3; };
  if (numParams[4] && numParams[4] === '1') layerStacked = true;
  if (numParams[5]) textOff1 = 1 * numParams[5];
  if (landscapeOrientation && numParams[5]) { textOff1 = 1; textOff2 = 1 * numParams[5]; };

  if (root.font && root.font != '') textFont = root.font;

  if (root.bdDescr_m && root.bdDescr_m != '') bdDescr.m = root.bdDescr_m;
  if (root.bdDescr_w && root.bdDescr_w != '') bdDescr.w = root.bdDescr_w;
  if (root.bdDescr_f && root.bdDescr_f != '') bdDescr.f = root.bdDescr_f;
  if (root.bdDescr_c && root.bdDescr_c != '') bdDescr.c = root.bdDescr_c;

  if (root.ddDescr_m && root.ddDescr_m != '') ddDescr.m = root.ddDescr_m;
  if (root.ddDescr_w && root.ddDescr_w != '') ddDescr.w = root.ddDescr_w;
  if (root.ddDescr_f && root.ddDescr_f != '') ddDescr.f = root.ddDescr_f;
  if (root.ddDescr_c && root.ddDescr_c != '') ddDescr.c = root.ddDescr_c;

  document.getElementById("Title").innerHTML = root.name;
  document.title = root.name;
  if (root.photo && root.photo != '') changeFavicon(root.photo);
  else changeFavicon(defaultData[0].photo);

  // put fixed copyright div at bottom right
  var copyrightDiv = document.getElementById("copyright");
  copyrightDiv.style.left = (graph.left + graph.width - 42) + 'px';
  copyrightDiv.style.top = (graph.top + graph.height - 10) + 'px';

  // calculating nodes, leafs and hierarchy and print summary at bottom left
  var summaryDiv = document.getElementById("summaryD");
  summaryDiv.style.left = (graph.left + 2) + 'px';
  summaryDiv.style.top = (graph.top + graph.height - 14) + 'px';
  summaryDiv.align = 'left';

  var tree = d3.hierarchy(root);
  tree.count();

/*
  // Don't know why the nomber of nodes and links are 3x more !!!
  var sumText = 'This dataset has ' + tree.copy().count().value + 
      ' leaves on a total of ' + tree.descendants().length + ' nodes with ' + 
      tree.links().length + ' links and hierarchy depth of ' + (tree.height - 1) + '.';
//      ' leaves on a total of ' + Math.floor((tree.descendants().length - 1) / 3 + 1) + ' nodes with ' + 
//      Math.floor(tree.links().length / 3) + ' links and hierarchy depth of ' + (tree.height - 1) + '.';
*/

  var nodeTypes = ["invisible", "men", "women", "families", "cohabitations", "boys", "girls"];
  var nodeCounts = [
    _.filter(fdata, { hide: 'yes' }).length + _.filter(fdata, { hide: 'no' }).length,
    _.filter(fdata, { type: 'm' }).length, _.filter(fdata, { type: 'w' }).length,
    _.filter(fdata, { type: 'f' }).length, _.filter(fdata, { type: 'c' }).length,
    _.filter(fdata, { type: 'b' }).length, _.filter(fdata, { type: 'g' }).length
  ];
  var nodesTotal = nodeCounts.reduce(function(a, b){ return a + b; }, 0);
  var sumText = 'This dataset has hierarchy depth of ' + (tree.height - 1) + 
    ' (+ 2 invisible) and total of ' + nodesTotal + ' nodes:';
  for (var i = 0; i<nodeTypes.length; i++) {
    sumText += ' ' + nodeCounts[i] + ' ' + nodeTypes[i] + ', ';
  };
  sumText = sumText.substring(0, sumText.length - 2) + '.';

  treeDepth = 1 + tree.height;
  summaryDiv.innerHTML =sumText;

  // re-draw the svg container for the full graph
  svg.attr("left", graph.left)
     .attr("top", graph.top)
     .attr("width", graph.width)
     .attr("height", graph.height);

  // Call main chart update function
  update(root);
}

var map;
//var markerVectorLayer;
if (showMaps) {
    map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([defaultData[0].loc.lon, defaultData[0].loc.lat]),
        zoom: defaultData[0].loc.zoom
      })
    });
}

// Lastly call convertData function with built-in defaultData
if (typeof(Storage) !== "undefined" && !sessionStorage['fileName']) 
  convertData (defaultData);

function formatDate (input, formatInput, formatOutput){
    var dateParse = d3.time.format(formatInput).parse;
    var dateFormat = d3.time.format(formatOutput);
    return dateFormat(new Date(dateParse(input)));
};

// colouring function
var colors = d3.scale.category20();

function getDateDescr (field, descr) {
  return field == "m" ? descr.m + ": " : 
         field == "w" ? descr.w + ": " : 
         field == "b" ? descr.m + ": " : 
         field == "g" ? descr.w + ": " : 
         field == "f" ? descr.f + ": " : 
         field == "c" ? descr.c + ": " : "";
};

function getDate(date) {
  var format = d3.time.format("%d.%m.%Y");
  var list = date.match(/\d+/g);
  return !date ? "?" : (list.length == 3 ? format(new Date(date)) : 
                       (list.length == 2 && date.startsWith('-') ? list[1] + '.' + list[0] : 
                       (list.length == 1 && date.substr(-1) === "-" ? list[0] : "?")));
};

function update(source) {
  // Empty dataPoints arrea and remove marker layer from the map
  dataPoints = [];
  if (map) {
    map.getLayers().forEach(layer => {
      if (layer && layer.get('name') === 'Marker') {
        map.removeLayer(layer);
      }
    });
  };

  // Compute the new tree layout.
  nodes = tree.nodes(source); // .reverse();

  //tooltip
  var tooltip = d3.select("body").append("div").attr("class", "tooltip").style("opacity", 0);

  //make nodes unique by id
  nodes = _.uniq(nodes, "id");

  var dyPerDepth = [];
  var maxItemsPerDepth = 0;
  _.each(nodes, function (o, i) {
      var itemsOfTheSameDepth = _.filter(nodes, { depth: o.depth });

      // calculate man label number of characters
      var maxLabelLen = 26;
      for (var index = 0; index < itemsOfTheSameDepth.length; ++index) {
          maxLabelLen = Math.max(maxLabelLen, itemsOfTheSameDepth[index].name.length);
      }
      dyPerDepth.push({depth: o.depth, nodes: itemsOfTheSameDepth.length - 2, maxlen: maxLabelLen});

      if (maxItemsPerDepth < (itemsOfTheSameDepth.length - 2)) maxItemsPerDepth = itemsOfTheSameDepth.length - 2;
  });

  dyPerDepth = _.uniq(dyPerDepth, "depth");

  // calculate max label's length
  var maxLabelLen = 26;
  nodes.forEach(function(o, i) {
    if (nodes[i].id == 'root') return;
    maxLabelLen = Math.max(maxLabelLen, nodes[i].name.length);
  });

  var addOffset = 0; // for the chart
  var addOffset1 = 2 * circleRadius; // for the file

  if (landscapeOrientation) { // Landscape orientation
    // recalculate the x poition of each node after the removal
    _.each(nodes, function (o, i) {
        var itemsOfTheSameDepth = _.filter(nodes, { depth: o.depth });
        var indexOfTheCurrentItem = _.indexOf(itemsOfTheSameDepth, o);
        var itemsOfTheSameDepthLength = itemsOfTheSameDepth.length;
        var itemCurr = _.filter(dyPerDepth, { depth: o.depth });
        var intervalPerDepth = 3 * textOff + 2 * circleRadius;
        if (nodes[i].id == "root" || nodes[i].hide == "yes") {
          nodes[i].x = graph.height / 2;
        }
        else {
          if (itemsOfTheSameDepth.length % 2 == 0) {
            if (indexOfTheCurrentItem < Math.floor(itemsOfTheSameDepthLength / 2)) nodes[i].x = graph.height / 2 - intervalPerDepth * (itemsOfTheSameDepthLength / 2 - indexOfTheCurrentItem - 0.5);
            else nodes[i].x = graph.height / 2  + intervalPerDepth * (indexOfTheCurrentItem - itemsOfTheSameDepthLength / 2 + 0.5);
          } else {
            if (indexOfTheCurrentItem == Math.floor(itemsOfTheSameDepthLength / 2)) nodes[i].x = graph.height / 2;
            else if (indexOfTheCurrentItem < Math.floor(itemsOfTheSameDepthLength / 2)) nodes[i].x = graph.height / 2  - intervalPerDepth * (Math.floor(itemsOfTheSameDepthLength / 2) - indexOfTheCurrentItem);
            else nodes[i].x = graph.height / 2 + intervalPerDepth * (indexOfTheCurrentItem - Math.floor(itemsOfTheSameDepthLength / 2));
          }
        }
        // add vertical offset to each node's x
        nodes[i].x = nodes[i].x - addOffset;
        if (nodes[i].x < 0 && svgOffsetX < (-nodes[i].x + addOffset1)) svgOffsetX = -nodes[i].x + addOffset1;
    });
    // calculate fixed horisontal offset and dy step
    svgOffsetY = circleRadius + 2;
    // Normalize for fixed-depth.
    nodes.forEach(function(d) {
      if (d.id != "root" && d.hide != "yes") {
        var dx = textOff1 * (d.x - graph.height / 2 + addOffset);
        var itemCurr = _.filter(dyPerDepth, { depth: d.depth });
        if (!layerStacked) d.x = dx * maxItemsPerDepth / itemCurr[0].nodes + graph.height / 2 - addOffset;
      }
      if (d.depth < 2) {
        d.y = -svgOffsetY;
      } else if (d.depth == 2) {
        var itemCurr = _.filter(dyPerDepth, { depth: 2 });
        d.y = Math.max(circleRadius, charLen * Math.max(13, (itemCurr[0].maxlen / 2)));
      
      } else {
        var itemCurr = _.filter(dyPerDepth, { depth: d.depth });
        var dy = Math.max(circleRadius, charLen * Math.max(13, (itemCurr[0].maxlen / 2)));
        for (var index = 3; index <= d.depth ; ++index) {
          var itemCurr = _.filter(dyPerDepth, { depth: index });
          var itemPrev = _.filter(dyPerDepth, { depth: index - 1 });
          dy += Math.max(circleRadius * 2, charLen * Math.max(26, (itemPrev[0].maxlen / 2 + itemCurr[0].maxlen / 2)));
        }
        d.y = dy * textOff2;
      }
    });
  } else {  // Portrait orientation
    _.each(nodes, function (o, i) {
        var itemsOfTheSameDepth = _.filter(nodes, { depth: o.depth });
        var indexOfTheCurrentItem = _.indexOf(itemsOfTheSameDepth, o);
        var itemsOfTheSameDepthLength = itemsOfTheSameDepth.length;
//        var itemCurr = _.filter(dyPerDepth, { depth: o.depth });
        var intervalPerDepth = Math.max(charLen * maxLabelLen, 2 * circleRadius);
        if (nodes[i].id == "root" || nodes[i].hide == "yes") {
          nodes[i].x = graph.width / 2;
        }
        else {
          if (itemsOfTheSameDepthLength % 2 == 0) {
            if (indexOfTheCurrentItem < Math.floor(itemsOfTheSameDepthLength / 2)) nodes[i].x = graph.width / 2 - intervalPerDepth * (itemsOfTheSameDepthLength / 2 - indexOfTheCurrentItem - 0.5);
            else nodes[i].x = graph.width / 2  + intervalPerDepth * (indexOfTheCurrentItem - itemsOfTheSameDepthLength / 2 + 0.5);
          } else {
            if (indexOfTheCurrentItem == Math.floor(itemsOfTheSameDepthLength / 2)) nodes[i].x = graph.width / 2;
            else if (indexOfTheCurrentItem < Math.floor(itemsOfTheSameDepthLength / 2)) nodes[i].x = graph.width / 2 - intervalPerDepth * (Math.floor(itemsOfTheSameDepthLength / 2) - indexOfTheCurrentItem);
            else nodes[i].x = graph.width / 2 + intervalPerDepth * (indexOfTheCurrentItem - Math.floor(itemsOfTheSameDepthLength / 2));
          }
        }
        // add vertical offset to each node's x
        if (nodes[i].x < 0 && svgOffsetY < -nodes[i].x) svgOffsetY = -nodes[i].x;
    });
    // calculate fixed horisontal offset and dy step
    svgOffsetX = circleRadius + 2;
    svgOffsetY = svgOffsetY;
    svgOffsetY1 = charLen * maxLabelLen / 2;
    // Normalize for fixed-depth.
    nodes.forEach(function(d) {
      if (d.id != "root" && d.hide != "yes") {
        var dx = d.x - graph.width / 2;
        var itemCurr = _.filter(dyPerDepth, { depth: d.depth });
        if (!layerStacked) d.x = dx * maxItemsPerDepth / itemCurr[0].nodes + graph.width / 2;
      }

      var dy = (2 * circleRadius + 3 * textOff) * textOff1;
      if (d.depth < 2) {
        d.y = -svgOffsetX;
      } else if (d.depth == 2) {
        d.y = 2 * circleRadius;
      } else {
        var itemCurr = _.filter(dyPerDepth, { depth: d.depth });
        d.y = dy * (d.depth - 2) + 2 * circleRadius;
      }
    });
  }

  var links = tree.links(nodes);

  // remap the links to the appropriate targets
  _.each(links, function (o, i) {
      links[i].target = _.find(nodes, { id: o.target.id });
  });

  // Draw links
  var link = svg.selectAll("path")
      .data(links).enter()
      .append("svg:path")
      .attr("class", function(d) { return d.source.id == 'root' || d.source.hide == 'yes' ? "link-invisible" : d.source.id; })
      .classed("link", true)
      .style("stroke-width", function(d) { return (root.hide === 'yes' && d.source.hide === 'yes') ? '' : (circleRadius / 20) + 'px'; })
      .attr("d", diagonal);

  // Update the nodes
  var node = svg.selectAll("g.node")
    .data(nodes, function(d) {
      // needed to eliminate doubled nodes
      return d.id || (d.id = ++count);
    });

  // Enter any new node at the parent's previous position.
  var nodeEnter = node.enter().append("svg:g")
    .attr("class", "node")
    .attr("transform", function(d) {
      if (landscapeOrientation) return "translate(" + d.y + "," + d.x + ")";
      else return "translate(" + d.x + "," + d.y + ")"; 
    })
    .on('mouseup', function (d) {
        // remove all colour paths
        d3.selectAll('path.link')
            .style("stroke", '');

        // coloring selected circle
        d3.selectAll("circle")
            .style("stroke", function (o) {
                var ret = '';
                if (o === d) ret = 'red';
                else if (o && o.id != 'root' && o.circle && o.circle != '') ret = '#0f0';
                return ret;
            });

        // coloring all links down
        function coloringDownLinks(d) {
            d3.selectAll("." + d.id)
                    .style("stroke", function (d) {
                        if (d.source.children) d.source.children.forEach(coloringDownLinks);
                        return 'red';
                    });
        }
        coloringDownLinks(d);

        // coloring all links up
        function coloringUpLinks(d) {
            _.each(links, function (o, i) {
                if (o.target.id == d.id) {
                    d3.selectAll('.' + o.source.id)
                        .style("stroke", function (l) {
                            if (l.target != d) return;
                            coloringUpLinks(o.source);
                            return "red";
                        });
                }
            });
        }
        coloringUpLinks(d);
    })
    .on('mousedown', function (d) { // set locations and time selected
      if (d.loc.lat && d.loc.lon && d.loc.zoom) {
        map.getView().setCenter(ol.proj.transform([+d.loc.lon, +d.loc.lat], 'EPSG:4326', 'EPSG:3857'));
        map.getView().setZoom(+d.loc.zoom);
      } else {
        map.getView().setCenter(ol.proj.transform([+root.loc.lon, +root.loc.lat], 'EPSG:4326', 'EPSG:3857'));
        map.getView().setZoom(+root.loc.zoom);
      }
      timeSelected = null;
      if (d.bdate && d.bdate != '' && !d.bdate.startsWith('-') && (d.bdate.substr(-1) === "-" || d.bdate.match(/\d+/g).length == 3)) {
        var bdate = d.bdate.substr(-1) !== "-" ? d.bdate : d.bdate.match(/\d+/g).length == 1 ? d.bdate + "1-1" : d.bdate.match(/\d+/g).length == 2 ? d.bdate + "1" : d.bdate;
        timeSelected = bdate;
      }
    })
    .on('mouseover', function (d) { // set tooltip visible
        if (d.type && d.type != '') {
            tooltip.transition()
                    .duration(200)
                    .style('opacity', 1);
        }
    })
    .on('mousemove', function (d) { // set tooltip content
        var bdate = getDate(d.bdate ? d.bdate : "");
        var ddate = getDate(d.ddate ? d.ddate : "");
        var descr = (d.bdate ? getDateDescr (d.type, bdDescr) + bdate + "<br>" : "") +
                    (d.ddate ? getDateDescr (d.type, ddDescr) + ddate + "<br>" : "") +
                    (d.place && d.place != '' ? d.place + "<br>" : "");

        tooltip.html('<table><tr vertical-align="top"><td class="no-borders" align="center" vertical-align="top">' + 
                (d.photo ? (d.name + '<br><br><img src="' + d.photo +
                '" width="180px"><br>' + descr) : (d.name + "<br>" + descr)) + '</td>' + (d.description ? 
                '<td class="no-borders" width="' + Math.max(200, d.description.length * 6.5 / 16) + 
                'px" align="left" vertical-align="top" style="padding-left: 8px;">' +
                '<span style="font-weight:normal;">' + d.description + '</span></td>' : '') + '</tr></table>')
            .style("left", (d3.event.pageX - tooltip.node().getBoundingClientRect().width + 2) + "px")
            .style("top", (d3.event.pageY - (tooltip.node().getBoundingClientRect().height + 2) / 3) + "px");
    })
    .on('mouseout', function (d) { // set tooltip invisible
        tooltip.transition()
                .duration(200)
                .style('opacity', 0);
    })
;

  var specialCircle = 0;
  // Draw circles for each node
  nodeEnter.append("circle")
    .attr("class", "circle")
    .attr('r', function(d) { 
      if (d.id != 'root' && d.circle && d.circle != '') {
        specialCircle = 1*d.circle*circleRadius;
      }
      var ret = d.hide == "yes" ? 0 : d.id != 'root' && d.circle && d.circle != '' ? 1*d.circle*circleRadius : d.photo && d.photo != '' ? 1*circleRadius : 1*circleRadius / 2;
      return ret;
    })
    .style("fill", function(d) {
      // Fill events data for both groups in timeline
      if (d.bdate && d.bdate != '' && !d.bdate.startsWith('-') && (d.bdate.substr(-1) === "-" || d.bdate.match(/\d+/g).length == 3)) {
        var bdate = d.bdate.substr(-1) !== "-" ? d.bdate : d.bdate.match(/\d+/g).length == 1 ? d.bdate + "1-1" : d.bdate.match(/\d+/g).length == 2 ? d.bdate + "1" : d.bdate;
        var dataEvent = {
            type:  TimelineChart.TYPE.POINT,
            at:    new Date(bdate),
//            type:  TimelineChart.TYPE.INTERVAL,
            from:  new Date(bdate),
//            to:    new Date(d.ddate),
            label: d.name && d.name != '' ? d.name : '',
            name:  d.name && d.name != '' ? d.name : '',
            photo: d.photo && d.photo != '' ? d.photo : '',
            bdate: d.bdate && d.bdate != '' ? d.bdate : '',
            ddate: d.ddate && d.ddate != '' ? d.ddate : '',
            descr: d.type && d.type != '' ? d.type : '',
            place: d.place && d.place != '' ? d.place : ''
//            color: colors(d.id.split('-')[0])
        };
        if (d.type && (d.type == 'm' || d.type == 'w' || d.type == 'b' || d.type == 'g')) dataEventsPeople.push(dataEvent);
        else if (d.type && (d.type == 'f' || d.type == 'c')) dataEventsFamily.push(dataEvent);
      }
      // Fill data for map markers
      if (d.loc.lat && d.loc.lon && d.loc.zoom) {
          var mloc = [+d.loc.lat, +d.loc.lon, +d.loc.zoom];
          d.id == 'root' ? mloc.push('') : mloc.push(d.name);
          dataPoints.push(mloc);
      }
      // Return white circle color
      return "#fff";
    })
    .style("stroke", function(d) {
      return d.id != 'root' && d.circle && d.circle != '' ? "#0f0" : ""
    });

    // Set up image clip circles
    var defs = nodesLayer.append('defs');
    var clipPath = defs.append('clipPath')
      .attr('id', 'clip-circle')
      .append('circle')
      .attr('r', circleRadius);
    var defs1 = nodesLayer.append('defs');
    var clipPath1 = defs1.append('clipPath')
      .attr('id', 'clip-circle-big')
      .append('circle')
      .attr('r', specialCircle);
    var defs2 = nodesLayer.append('defs');
    var clipPath2 = defs2.append('clipPath')
      .attr('id', 'clip-circle-small')
      .append('circle')
      .attr('r', circleRadius / 2);

    // Draw image for each node
    nodeEnter.append("image")
      .attr("xlink:href", function(d) {
          var ret ='';
          if (d.hide == 'yes') return ret;
          if (d.photo && d.photo != '') ret = d.photo;
          else if (d.type == 'e') ret = specialPhotos.empty;
          else if (d.type == 'r') ret = specialPhotos.root;
          else if (d.type == 'm') ret = specialPhotos.men;
          else if (d.type == 'w') ret = specialPhotos.women;
          else if (d.type == 'f') ret = specialPhotos.family;
          else if (d.type == 'c') ret = specialPhotos.couple;
          else if (d.type == 'b') ret = specialPhotos.boy;
          else if (d.type == 'g') ret = specialPhotos.girl;
          return ret; 
      })
      .attr("x", function(d) { 
        var res = "-" + Math.round(1.35 * (d.id != 'root' && d.circle ? 1*d.circle*circleRadius : d.photo && d.photo != '' ? circleRadius : 0.5*circleRadius)) + "px"
        return d.id != 'root' && d.hide == 'yes' ? "0px" : res;
      })
      .attr("y", function(d) {
        var res = "-" + Math.round(1.35 * (d.id != 'root' && d.circle ? 1*d.circle*circleRadius : d.photo && d.photo != '' ? circleRadius : 0.5*circleRadius)) + "px"
        return d.id != 'root' && d.hide == 'yes' ? "0px" : res;
      })
      .attr("width", function(d) { 
        var res = Math.round(2.7 * (d.id != 'root' && d.circle ? 1*d.circle*circleRadius : d.photo && d.photo != '' ? circleRadius : 0.5*circleRadius)) + "px"
        return d.id != 'root' && d.hide == 'yes' ? "0px" : res;
      })
      .attr("height", function(d) { 
        var res = Math.round(2.7 * (d.id != 'root' && d.circle ? 1*d.circle*circleRadius : d.photo && d.photo != '' ? circleRadius : 0.5*circleRadius)) + "px"
        return d.id != 'root' && d.hide == 'yes' ? "0px" : res;
      })
      .attr('clip-path', function(d) {
        res = d.id != 'root' && d.circle && d.circle != '' ? 'url(#clip-circle-big)' : d.photo && d.photo != '' ? 'url(#clip-circle)' : 'url(#clip-circle-small)' ;
        return res;
      });

    // Print first line of text for each node
    nodeEnter.append("text")
      .attr("class", "text")
      .attr("dy", function(d) {
        return d.id != 'root' && d.circle ? 1*d.circle*circleRadius + 1 * textOff : 1 * textOff + (d.photo && d.photo != '' ? 1*circleRadius : 0.5*circleRadius);
      })
      .attr("dx", 0)
      .attr("text-anchor", function(d) { return "middle"; })
//      .style('fill', function(d) { return colors(d.id.split('-')[0]) } )
      .text(function(d) {
        return d.id == 'root' || d.hide == "yes" ? '' : d.name ? d.name : '';
      })
      .style("fill-opacity", 1)
      .style("font", function(d) {
        var ret = textFont;
        if (d.font && d.font != '') ret = d.font;
        return ret;
      });

    // Print second line of text for each node
    nodeEnter.append("text")
      .attr("class", "text")
      .attr("dy", function(d) { 
        return d.id != 'root' && d.circle ? 1*d.circle*circleRadius + 2.25 * textOff : 2.25 * textOff + (d.photo && d.photo != '' ? 1*circleRadius : 0.5*circleRadius);
      })
      .attr("dx", 0)
      .attr("text-anchor", function(d) { return "middle"; })
//      .style('fill', function(d) { return colors(d.id.split('-')[0]) } )
      .text(function(d) {
        var ret = '';
        if (d.id == 'root' || d.hide == "yes") return ret;

        var bdate = getDate(d.bdate ? d.bdate : "");
        var ddate = getDate(d.ddate ? d.ddate : "");

        if (bdate != '') ret += '(' + bdate;
        if (ddate != '?') ret += ' - ' + ddate;
        if (bdate != '' || ddate != '?') ret += ')';
        return ret;
      })
      .style("fill-opacity", 1)
      .style("font", function(d) {
        var ret = textFont;
        if (d.font && d.font != '') ret = d.font;
        return ret;
      });

    if (showMaps) {
        addMapMarkers();
    }
    if (showTime) {
      createTimeline();
    }

}

function addMapMarkers () {
    //Adding markers on the map
    var markers = [];
    for (var i = 0; i < dataPoints.length; i++) { 
        if (dataPoints[i][3] == '') { continue; }
        var marker = new ol.Feature({
          geometry: new ol.geom.Point(
            ol.proj.fromLonLat([dataPoints[i][1], dataPoints[i][0]])
          ),
        });

        var iconStyle = [
            new ol.style.Style({
                image: new ol.style.Icon(({
                    anchor: [0.5, 1],
                    anchorXUnits: 'fraction',
                    anchorYUnits: 'fraction',
                    size: [200, 200],
                    scale: 0.16,
                    src: "data:image/png;base64,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"
//                          src: 'https://cdn.mapmarker.io/api/v1/pin?size=25&background=%236666FF&icon=fa-circle&color=%23FFFFFF&voffset=-2&hoffset=1&'
                }))
            }),
            new ol.style.Style({
                text: new ol.style.Text({
                    text: dataPoints[i][3],
                    offsetY: 8,
                    font: '12pt Calibri,sans-serif',
                    fill: new ol.style.Fill({
                        color: '#00f'
                    })
                })
            })
        ];        
        marker.setStyle(iconStyle);
        markers.push(marker);
    }
    var vectorSource = new ol.source.Vector({
      features: markers
    });
    var markerVectorLayer = new ol.layer.Vector({
      source: vectorSource,
    });
    map.addLayer(markerVectorLayer);

    map.getView().setCenter(ol.proj.transform([+root.loc.lon, +root.loc.lat], 'EPSG:4326', 'EPSG:3857'));
    map.getView().setZoom(+root.loc.zoom);
}

var timeline;
function createTimeline () {
//if (showTime) {
    const element = document.getElementById('timeline');

    var dataTimeline = _.clone(dataTimelineGeneration);
    // Fill dynamic groups labels and data
    if (root.tlLabel_g && root.tlLabel_g != '') {
      dataTimeline[0].label = root.tlLabel_g;
    } else {
        dataTimeline[0].label = tlLabels.g;
    }
    dataTimeline.push({label: (root.tlLabel_f && root.tlLabel_f != '' ? root.tlLabel_f : tlLabels.f), data: dataEventsFamily});
    dataTimeline.push({label: (root.tlLabel_p && root.tlLabel_p != '' ? root.tlLabel_p : tlLabels.p), data: dataEventsPeople});

    if (timeline) location.reload(false);

    timeline = new TimelineChart(element, dataTimeline, {
        enableLiveTimer: true,
        timerTickInterval: 100,
        groupLabels: 127,
        timeSelected: function() {
            // return time for selection marker in timeline
            return timeSelected;
        },
        tooltip: function(d) {
            // Compose timeline tooltip content
            var bdate = getDate(d.bdate ? d.bdate : "");
            var ddate = getDate(d.ddate ? d.ddate : "");

            var ret = ('<table><tr valign="top">' + 
              (d.photo ? '<td class="no-borders" align="left" valign="middle"><img src="' + 
                          d.photo + '" height="68px" max-width="68px"></td>' : "") +
              '<td class="no-borders" text-align="left" style="padding-left: 8px;">' + d.name + 
              (d.bdate ? "<br>" + getDateDescr (d.descr, bdDescr) + bdate : "") +
              (d.ddate ? "<br>" + getDateDescr (d.descr, ddDescr) + ddate : "") +
              (d.place && d.place != '' ? "<br>" + d.place : "") + "</td></tr></table>");
            return ret;
        }
    })
}
