'use server';

import { put } from '@vercel/blob';

export async function uploadImage(
  folderPath: string,
  file: File
): Promise<string | null> {
  try {
    const fileName = `${folderPath}/${Date.now()}-${file.name}`;
    const blob = await put(fileName, file, {
      access: 'public',
    });
    return blob.url;
  } catch (error) {
    console.error(error);
    return null;
  }
}
