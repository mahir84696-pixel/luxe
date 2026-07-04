export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export async function fetchProperties(params?: { status?: string; minPrice?: number; maxPrice?: number }) {
  const query = new URLSearchParams(params as any).toString();
  const res = await fetch(`${API_URL}/properties${query ? `?${query}` : ''}`, {
    next: { revalidate: 60 } // Next.js caching
  });
  if (!res.ok) throw new Error('Failed to fetch properties');
  return res.json();
}

export async function fetchPropertyById(id: string) {
  const res = await fetch(`${API_URL}/properties/${id}`, {
    next: { revalidate: 60 }
  });
  if (!res.ok) throw new Error('Failed to fetch property');
  return res.json();
}
