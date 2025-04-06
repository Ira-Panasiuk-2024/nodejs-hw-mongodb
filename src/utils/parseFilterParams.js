// const parseContactType = (value) => {
//   if (typeof value === 'undefined') {
//     return;
//   }
//   const isContactType = ['work', 'home', 'personal'];
//   if (Array.isArray(value)) {
//     return value.filter((item) => isContactType.includes(item));
//   } else {
//     return isContactType.includes(value) ? value : undefined;
//   }
// };

// const parseContactType = (value) => {
//   if (typeof value === 'undefined') {
//     return;
//   }
//   const isContactType = ['work', 'home', 'personal'];
//   if (Array.isArray(value)) {
//     return value.filter((item) => isContactType.includes(item));
//   } else {
//     return isContactType.includes(value) ? [value] : undefined;
//   }
// };

// const parseIsFavourite = (value) => {
//   if (typeof value === 'undefined') {
//     return;
//   }
//   if (value === 'true') {
//     return true;
//   } else if (value === 'false') {
//     return false;
//   } else {
//     return undefined;
//   }
// };

// export const parseFilterParams = (query) => {
//   const { type, isFavourite } = query;

//   const parsedContactType = parseContactType(type);
//   const parsedIsFavourite = parseIsFavourite(isFavourite);

//   console.log('parsedContactType:', parsedContactType);
//   console.log('parsedIsFavourite:', parsedIsFavourite);

//   return {
//     type: parsedContactType,
//     isFavourite: parsedIsFavourite,
//   };
// };

const parseContactType = (contactType) => {
  if (['work', 'home', 'personal'].includes(contactType)) {
    return contactType;
  }
};

const parseIsFavourite = (isFavourite) => {
  if (isFavourite === 'true') return true;
  if (isFavourite === 'false') return false;
};

export const parseFilterParams = (query) => {
  const { contactType, isFavourite } = query;

  const parsedContactType = parseContactType(contactType);
  const parsedIsFavourite = parseIsFavourite(isFavourite);

  return {
    contactType: parsedContactType,
    isFavourite: parsedIsFavourite,
  };
};