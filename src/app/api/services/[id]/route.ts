import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// DELETE /api/services/[id]
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
): Promise<NextResponse> {
  try {
    await prisma.service.delete({
      where: {
        id: params.id
      }
    });
    return NextResponse.json({ message: 'Usługa została usunięta' });
  } catch (error) {
    console.error('Error deleting service:', error);
    return NextResponse.json(
      { error: 'Wystąpił błąd podczas usuwania usługi' },
      { status: 500 }
    );
  }
} 