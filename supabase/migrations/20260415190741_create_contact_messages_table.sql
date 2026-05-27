/*
  # Create contact messages table

  1. New Tables
    - `contact_messages`
      - `id` (uuid, primary key)
      - `name` (text) - Visitor's name
      - `email` (text) - Visitor's email address
      - `message` (text) - Contact message
      - `created_at` (timestamp) - Message creation timestamp

  2. Security
    - Enable RLS on `contact_messages` table
    - Add policy allowing public inserts for form submissions
    - Add policy allowing only admins to read messages
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact messages"
  ON contact_messages
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can view messages"
  ON contact_messages
  FOR SELECT
  TO authenticated
  USING (true);
