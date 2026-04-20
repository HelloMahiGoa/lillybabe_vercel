alter table public.profiles
drop constraint if exists profiles_location_check;

alter table public.profiles
add constraint profiles_location_check check (
  location in (
    'Egmore',
    'Vadapalani',
    'Guindy',
    'Kilpauk',
    'Nungambakkam',
    'OMR',
    'Arumbakkam',
    'Tnagar',
    'Teynampet',
    'Royapettah'
  )
);
