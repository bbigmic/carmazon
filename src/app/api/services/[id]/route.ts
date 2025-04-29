import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

type Props = {
  params: {
    id: string;
  };
};

// DELETE /api/services/[id]
export async function DELETE(
  request: NextRequest,
  props: Props
) {
  try {
    await prisma.service.delete({
      where: {
        id: props.params.id
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