#!/usr/bin/env python3
"""
Task 5:
Calculate the sum of all the numbers in the input list.
"""


from typing import List

def sum_list(input_list: List[float]) -> float:
    """
    Returns the sum of elements in a given list of floats.

    Args:
        input_list (List[float]): The input list of floats.

    Returns:
        float: The sum of the elements in the input list.
    """
    return sum(input_list)
