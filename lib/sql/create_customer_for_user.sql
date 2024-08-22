CREATE OR REPLACE FUNCTION create_customer_for_user(
    p_id INT,
    p_email TEXT,
    p_raw_user_meta_data JSONB
)
RETURNS VOID AS
$$
BEGIN
    INSERT INTO public.customers(id, email, first_name, last_name, company_name)
    VALUES (
        p_id, 
        p_email, 
        p_raw_user_meta_data ->> 'first_name', 
        p_raw_user_meta_data ->> 'last_name',
        p_raw_user_meta_data ->> 'company_name'
    );
END;
$$
LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION create_customer_for_user() RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.customers(id, email, first_name, last_name, company_name)
    VALUES (
        NEW.id, 
        NEW.email, 
        NEW.raw_user_meta_data ->> 'first_name', 
        NEW.raw_user_meta_data ->> 'last_name',
        NEW.raw_user_meta_data ->> 'company_name'
    );

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

create table
  public.customers (
    id uuid not null,
    created_at timestamp with time zone not null default now(),
    email text null,
    first_name text null,
    last_name text null,
    company_name text null,
    constraint customers_pkey primary key (id),
    constraint customers_id_fkey foreign key (id) references auth.users (id) on delete cascade
  ) tablespace pg_default;

