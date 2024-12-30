import { fireEvent, render, screen } from '@testing-library/react';
import Header from '../pages/components/header/header';
import Card from '../pages/components/card/card'

test('renders learn in header "Task Manager"', () => {
  render(<Header onFilterChange={() => {}} onEditClick={() => {}} />);
  const linkElement = screen.getByText(/Task Manager/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders task title correctly', () => {
  render(
    <Card
      title="Test Task"
      status={false}
      createdAt="30/12/24"
      onCheckClick={() => {}}
      onEditClick={() => {}}
      onDeleteClick={() => {}}
    />
  );
  const titleElement = screen.getByText(/Test Task/i);
  expect(titleElement).toBeInTheDocument();
});

test('shows "Completed" when status is true', () => {
  render(
    <Card
      title="Test Task"
      status={true}
      createdAt="30/12/24"
      onCheckClick={() => {}}
      onEditClick={() => {}}
      onDeleteClick={() => {}}
    />
  );
  const statusElement = screen.getByText(/Completed/i);
  expect(statusElement).toBeInTheDocument();
});

test('shows correct edit icon based on status', () => {
  render(
    <Card
      title="Test Task"
      status={true}
      createdAt="30/12/24"
      onCheckClick={() => {}}
      onEditClick={() => {}}
      onDeleteClick={() => {}}
    />
  );
  const editIcon = screen.getByAltText(/edit Icon/i);
  expect(editIcon).toHaveAttribute('src', 'edit-icon.svg');
});

test('calls onCheckClick when checkbox is clicked', () => {
  const onCheckClickMock = jest.fn();
  
  render(
    <Card
      title="Test Task"
      status={false}
      createdAt="30/12/24"
      onCheckClick={onCheckClickMock}
      onEditClick={() => {}}
      onDeleteClick={() => {}}
    />
  );
  
  const checkbox = screen.getByRole('checkbox');
  fireEvent.click(checkbox);
  
  expect(onCheckClickMock).toHaveBeenCalledTimes(1);
  expect(onCheckClickMock).toHaveBeenCalledWith(true);
});

test('calls onEditClick when edit icon is clicked', () => {
  const onEditClickMock = jest.fn();

  render(
    <Card
      title="Test Task"
      status={false}
      createdAt="30/12/24"
      onCheckClick={() => {}}
      onEditClick={onEditClickMock}
      onDeleteClick={() => {}}
    />
  );
  
  const editIcon = screen.getByAltText(/edit Icon/i);
  fireEvent.click(editIcon);
  
  expect(onEditClickMock).toHaveBeenCalledTimes(1);
});

test('calls onDeleteClick when delete icon is clicked', () => {
  const onDeleteClickMock = jest.fn();

  render(
    <Card
      title="Test Task"
      status={false}
      createdAt="30/12/24"
      onCheckClick={() => {}}
      onEditClick={() => {}}
      onDeleteClick={onDeleteClickMock}
    />
  );
  
  const deleteIcon = screen.getByAltText(/trash Icon/i);
  fireEvent.click(deleteIcon);
  
  expect(onDeleteClickMock).toHaveBeenCalledTimes(1);
});

test('shows correct creation date', () => {
  render(
    <Card
      title="Test Task"
      status={false}
      createdAt="2024/12/30"
      onCheckClick={() => {}}
      onEditClick={() => {}}
      onDeleteClick={() => {}}
    />
  );
  const dateElement = screen.getByText(/30\/12\/2024/i);
  expect(dateElement).toBeInTheDocument();
});
